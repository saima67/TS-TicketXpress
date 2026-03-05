import React, { use, useState } from "react";
import Ticket from "../Ticket/Ticket";
import TaskStatus from "../TaskStatus/TaskStatus";

const CustomerTickets = ({ ticketsPromise, inProgressCount, setInProgressCount, resolvedCount,setResolvedCount }) => {
  const [ticketsInProgress, setTicketsInProgress] = useState([]);
  const ticketData = use(ticketsPromise);
  
  const handleTicket = (ticket) => {
    if(ticketsInProgress.includes(ticket)) return;
    const totalInProgress = [...ticketsInProgress, ticket];
    const newInProgressCount = inProgressCount + 1;
    setTicketsInProgress(totalInProgress);
    setInProgressCount(newInProgressCount);
    alert("New task added to in progress");
  }

  return (
    <div className="bg-gray-100 flex justify-between md:px-20 py-10">
      <div className="w-8/12">
        <h1 className="mb-5 text-xl font-bold text-[#34485A]">Customer Tickets</h1>
        {/* customer tickets */}
        <div className="grid grid-cols-2 gap-5">
          {ticketData.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} handleTicket={handleTicket}></Ticket>
          ))}
        </div>
      </div>
      {/* Task status */}
      <TaskStatus ticketsInProgress={ticketsInProgress}></TaskStatus>
    </div>
  );
};

export default CustomerTickets;
