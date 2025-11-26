import TaskForm from "./features/tasks/components/TaskForm";
import TaskList from "./features/tasks/components/TaskList";
import { useAppSelector } from "./store/hooks";

function App() {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <div className="app">
      <h1>TaskMaster React</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
