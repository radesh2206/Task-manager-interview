import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/tasks/taskActions";

const TaskInput: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(createTask(taskTitle));
      setTaskTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskInput;
