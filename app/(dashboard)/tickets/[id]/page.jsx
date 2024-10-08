import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();

  return {
    title: `Dojo Helpdesk | ${ticket.title}`,
  };
}

async function getTickets(id) {
  //creating a delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const TicketDetails = async ({ params }) => {
  const ticket = await getTickets(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>

      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
      </div>
    </main>
  );
};

export default TicketDetails;
