import { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";

const fetchTickets = async () => {
  const res = await fetch("/ticketStatus.json");
  return res.json();
}

const ticketsPromise = fetchTickets()

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount}></Banner>
      <Suspense>
        <CustomerTickets
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
          setInProgressCount={setInProgressCount}
          setResolvedCount={setResolvedCount}
          ticketsPromise={ticketsPromise}
        ></CustomerTickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
