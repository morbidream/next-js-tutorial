import Navbarr from '@/components/Navbar';
import TicketsList from '@/components/ticketsList';

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  });

  const tickets = await res.json();
  return { tickets };
}

function Tickets({ tickets }) {
  return <>
  <Navbarr />
  <TicketsList tickets={tickets} />
  </>
}

export async function getStaticProps() {
  const { tickets } = await getTickets();

  return {
    props: {
      tickets,
    },
  };
}

export default Tickets;