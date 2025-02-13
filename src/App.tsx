import "./styles.css";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

export default function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}
