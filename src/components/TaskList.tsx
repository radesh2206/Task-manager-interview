import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../features/tasks/taskActions";
import { RootState } from "../store";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.tasks.filter);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filterTasks = tasks.filter((task) => {
    console.log(task, filter);
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div>
      <TaskFilter />
      {filterTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
