import React from "react";

const TaskStatus = () => {
  return (
    <div className="w-4/12 px-10">
      <div>
        <h1 className="text-xl font-bold text-[#34485A] mb-2">Task Status</h1>
        <p>Select a ticket to add to Task Status</p>
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-bold text-[#34485A] mb-2">Resolved Task</h1>
        <p>No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default TaskStatus;
