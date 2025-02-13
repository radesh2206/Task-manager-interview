import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../features/tasks/taskSlice";

const TaskFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.target.value as "all" | "completed" | "pending"));
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">Show All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default TaskFilter;
