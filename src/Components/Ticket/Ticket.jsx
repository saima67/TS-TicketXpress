import React from "react";

const Ticket = ({ ticket }) => {
  return (
    <div className="card px-10 py-5 bg-base-100 w-96 shadow-sm">
      <div className="flex justify-between mb-2">
        <h4 className="text-nowrap">{ticket.title}</h4>
        <p
          className={` text-nowrap px-2 rounded-2xl ${
            ticket.status === "Open"
              ? "bg-green-500"
              : ticket.status === "In Progress"
              ? "bg-yellow-300"
              : "bg-red-500"
          }`}
        >
          {" "}
          {ticket.status}
        </p>
      </div>
      <p>{ticket.description}</p>
      <div>
        <ul className="flex gap-2 justify-between mt-2">
          <li>#{ticket.id}</li>
          <li
            className={` px-2 rounded-2xl ${
              ticket.priority === "High"
                ? "bg-red-500"
                : ticket.priority === "Medium"
                ? "bg-yellow-300"
                : "bg-green-500"
            }`}
          >
            {ticket.priority}
          </li>
          <li className="text-nowrap">{ticket.customer}</li>
          <li className="text-nowrap">{ticket.createdAt}</li>
        </ul>
      </div>
    </div>
  );
};

export default Ticket;
