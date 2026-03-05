import React from "react";

const TaskInProgress = ({ticket, handleComplete}) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-5">
        <h1 className="text-lg font-semibold text-[#001931] mb-3">{ticket.title}</h1>
        <button className="btn btn-lg px-25 text-white bg-[#02A53B]" onClick={()=>handleComplete(ticket)}>Complete</button>
    </div>
  );
};

export default TaskInProgress;
