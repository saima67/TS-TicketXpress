import { Suspense, useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/footer";
import Banner from "./Components/Banner/Banner";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";

const fetchTickets = async () => {
  const res = await fetch("/ticketStatus.json");
  return res.json();
};

function App() {
  const ticketsPromise = fetchTickets();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense>
        <CustomerTickets
          onClick={() => handleTickets()}
          ticketsPromise={ticketsPromise}
        ></CustomerTickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
