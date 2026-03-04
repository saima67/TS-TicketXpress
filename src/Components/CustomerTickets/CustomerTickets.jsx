import React, { use } from "react";
import Ticket from "../Ticket/Ticket";
import TaskStatus from "../TaskStatus/TaskStatus";

const CustomerTickets = ({ ticketsPromise }) => {
  const ticketData = use(ticketsPromise);
  console.log(ticketData);
  return (
    <div className="flex md:px-45 justify-between py-10">
      <div>
        <h1 className="mb-10 w-96">Customer Tickets</h1>
        {/* customer tickets */}
        <div className="grid grid-cols-2 gap-10">
          {ticketData.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket}></Ticket>
          ))}
        </div>
      </div>
      {/* Task status */}

      {/* <div>
        <h1 className=" mr-40 mt-8 w-96 mb-10">Task Status</h1>
        <div className="card bg-base-100 w-96 shadow-sm mr-50 mb-5 ">
          <div className="card-body">
            <h2 className="card-title text-left">
              Payment Failed - Card Declined
            </h2>
            <div className="card-actions">
              <button className="btn bg-[#03C755] text-white px-30 text-start">
                Complete
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-left">Incorrect Billing Address</h2>
            <div className="card-actions">
              <button className="btn bg-[#03C755] text-white px-30 text-start">
                complete
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <h1>Resolved Task</h1>
          <p>No resolved tasks yet.</p>
        </div>
      </div> */}
      <TaskStatus></TaskStatus>
    </div>
  );
};

export default CustomerTickets;
