import { useEffect } from "react";
import TaskForm from "./features/tasks/components/TaskForm";
import TaskList from "./features/tasks/components/TaskList";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchTasks } from "./features/tasks/taskSlice";
import {
  selectTasks,
  selectLoading,
  selectError,
  selectTaskCount,
} from "./features/tasks/tasksSelectors";

function App() {
  const tasks = useAppSelector(selectTasks);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const tasksCount = useAppSelector(selectTaskCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>TaskMaster React</h1>
      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div>
        <p>
          Total: {tasksCount.total} | Active: {tasksCount.active} | Completed:{" "}
          {tasksCount.completed}
        </p>
      </div>

      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
