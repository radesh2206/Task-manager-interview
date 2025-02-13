import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../features/tasks/taskActions";
import { toggleTask } from "../features/tasks/taskSlice";

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span>{task.title}</span>
      <button onClick={() => dispatch(removeTask(task.id))}>X</button>
    </div>
  );
};

export default TaskItem;
