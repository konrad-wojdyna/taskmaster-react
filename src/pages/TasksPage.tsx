import TaskForm from "@/features/tasks/components/TaskForm";
import TaskList from "@/features/tasks/components/TaskList";
import { useAppSelector } from "@/store/hooks";
import {
  selectTasks,
  selectLoading,
  selectError,
} from "@/features/tasks/tasksSelectors";

const TasksPage = () => {
  const tasks = useAppSelector(selectTasks);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>

      {loading && <p className="text-blue-600">Loading tasks...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <TaskForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Task List</h2>
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
};
export default TasksPage;
