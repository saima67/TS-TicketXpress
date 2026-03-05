import React from "react";
import TaskInProgress from "./TaskInProgress";

const TaskStatus = ({ticketsInProgress}) => {
  const handleComplete = (task) => {
    alert("Task Completed");
  }
  return (
    <div className="w-4/12 pl-5 md:px-10 text-black">
      <div>
        <h1 className="text-sm md:text-xl font-bold text-[#34485A] mb-5">Task Status</h1>
        {
          (ticketsInProgress.length == 0) ?
          <p className="text-[10px] md:text-[18px]">Select a ticket to add to Task Status</p>
          :ticketsInProgress.map((ticket) => (
            <TaskInProgress key={ticket.id} ticket={ticket} handleComplete={handleComplete}/>
          ))
        }
      </div>
      <div className="mt-10">
        <h1 className="text-sm text-nowrap md:text-xl font-bold text-[#34485A] mb-2">Resolved Task</h1>
        <p className="text-[10px] md:text-[18px] text-nowrap">No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default TaskStatus;
