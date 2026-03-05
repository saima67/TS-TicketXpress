import React, { use } from "react";
import Ticket from "../Ticket/Ticket";
import TaskStatus from "../TaskStatus/TaskStatus";

const CustomerTickets = ({ ticketsPromise }) => {
  const ticketData = use(ticketsPromise);
  console.log(ticketData);
  return (
    <div className="flex justify-between md:px-20 py-10">
      <div className="w-8/12">
        <h1 className="mb-10 text-xl font-bold text-[#34485A]">Customer Tickets</h1>
        {/* customer tickets */}
        <div className="grid grid-cols-2 gap-5">
          {ticketData.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket}></Ticket>
          ))}
        </div>
      </div>
      {/* Task status */}
      <TaskStatus></TaskStatus>
    </div>
  );
};

export default CustomerTickets;
