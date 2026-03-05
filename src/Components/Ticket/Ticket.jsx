import React from "react";
import "./Ticket.css";
const Ticket = ({ ticket, handleTicket }) => {
  return (
    <div className="card p-4 bg-base-100 shadow-sm text-[#627382] cursor-pointer" onClick={() => handleTicket(ticket)}>
      <div className="flex justify-between">
        <h4 className="text-nowrap text-[#34485A] font-semibold ">{ticket.title}</h4>
        <div
          className={`text-nowrap px-2 rounded-2xl font-medium inline-flex items-center gap-1 ${
            ticket.status === "Open"
              ? "bg-[#B9F8CF] text-[#0B5E06]"
              : "bg-[#F8F3B9] text-[#9C7700]"
          }`}
        >
          <span className={`circle ${
            ticket.status === "Open"
              ? "bg-[#02A53B]"
              : "bg-[#FEBB0C]"
          }`}></span>
          <span>{ticket.status}</span>
        </div>
      </div>
      <p className="py-3 text-sm">{ticket.description}</p>
      <div className="text-sm flex justify-between">
        <div className="flex justify-start gap-2 w-5/12">
          <p>#{ticket.id}</p>
          <p
            className={` px-2 rounded-2xl ${
              ticket.priority === "High"
                ? "text-[#F83044]"
                : ticket.priority === "Medium"
                ? "text-[#FEBB0C]"
                : "text-[#02A53B]"
            }`}
          >
            {ticket.priority}
          </p>
        </div>
        <div className="flex justify-end gap-3 w-7/12">
          <p>{ticket.customer}</p>
          <p><i className="fa-regular fa-calendar pr-1"></i>{ticket.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
