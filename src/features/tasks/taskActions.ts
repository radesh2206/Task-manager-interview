import { AppDispatch } from "../../store";
import { setTasks, addTask, deleteTask } from "./taskSlice";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTasks = (): any => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();

    const tasks: Task[] = data.map((task: any) => ({
      id: task.id,
      title: task.title,
      completed: task.completed,
    }));
    dispatch(setTasks(tasks));
  } catch (error) {
    console.log("Error fetching tasks:", error);
  }
};

export const createTask =
  (title: string): any =>
  async (dispatch: AppDispatch) => {
    try {
      const newTask: Task = { id: Date.now(), title, completed: false };
      dispatch(addTask(newTask));
    } catch (error) {
      console.log("Error creating task:", error);
    }
  };

export const removeTask =
  (taskId: number): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(deleteTask(taskId));
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };
