import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <Image
        src="/dojo-logo.png"
        alt="dojo logo"
        width={70}
        height={70}
        quality={100}
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};

export default Navbar;
