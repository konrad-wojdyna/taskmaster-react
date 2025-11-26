import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { selectTasks } from "@/features/tasks/tasksSelectors";
import { deleteTask, toggleComplete } from "@/features/tasks/taskSlice";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Task Not Found</h1>
        <p className="text-slate-600 mb-4">Task with ID {id} doesn't exist.</p>
        <Link to="/tasks" className="text-blue-600 hover:underline">
          ← Back to Tasks
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task.id));
      navigate("/tasks");
    }
  };

  const handleToggle = () => {
    dispatch(toggleComplete(task.id));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link
        to="/tasks"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Tasks
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{task.text}</h1>

        <div className="space-y-4">
          <div>
            <span className="text-slate-600 font-semibold">Task ID:</span>
            <span className="ml-2 text-slate-900">{task.id}</span>
          </div>

          <div>
            <span className="text-slate-600 font-semibold">Status:</span>
            <span
              className={`ml-2 px-3 py-1 rounded ${
                task.completed
                  ? "bg-green-100 text-green-800"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              {task.completed ? "Completed ✓" : "In Progress"}
            </span>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleToggle}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>

            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskDetailsPage;
