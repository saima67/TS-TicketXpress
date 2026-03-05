import React from "react";

const TaskInProgress = ({ticket, handleComplete}) => {
  return (
    <div className="w-auto bg-white rounded-md shadow-sm p-2 md:p-4 mb-5">
        <h1 className="text-[10px] md:text-lg font-semibold text-[#001931] mb-3">{ticket.title}</h1>
        <button className="btn btn-sm md:btn-lg md:px-25 text-white bg-[#02A53B]" onClick={()=>handleComplete(ticket)}>Complete</button>
    </div>
  );
};

export default TaskInProgress;
