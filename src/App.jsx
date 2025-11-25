import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="app">
      <h1>TaskMaster React</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
