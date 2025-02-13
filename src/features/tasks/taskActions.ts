import { setTasks, addTask, deleteTask } from "./taskSlice";

export const fetchTasks = () => async (dispatch: any) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();

    const tasks = data.map((task: any) => ({
      id: task.id,
      title: task.title,
      completed: task.completed,
    }));
    dispatch(setTasks(tasks));
  } catch (error) {
    console.log("Error");
  }
};

export const createTask = (title: string) => async (dispatch: any) => {
  try {
    const newTask = { id: Date.now(), title, completed: false };
    dispatch(addTask(newTask));
  } catch (error) {
    console.log("Error");
  }
};

export const removeTask = (taskId: number) => async (dispatch: any) => {
  try {
    dispatch(deleteTask(taskId));
  } catch (error) {
    console.log("Error");
  }
};
