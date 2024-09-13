import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://localhost:4000/tickets');
  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}
