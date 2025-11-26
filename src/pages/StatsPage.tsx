import { useAppSelector } from "@/store/hooks";
import {
  selectTaskCount,
  selectCompletedTasks,
  selectActiveTasks,
} from "@/features/tasks/tasksSelectors";

const StatsPage = () => {
  const tasksCount = useAppSelector(selectTaskCount);
  const completedTasks = useAppSelector(selectCompletedTasks);
  const activeTasks = useAppSelector(selectActiveTasks);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Statistics</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-600">Total Tasks</h3>
          <p className="text-4xl font-bold text-blue-600">{tasksCount.total}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-600">Active</h3>
          <p className="text-4xl font-bold text-orange-600">
            {tasksCount.active}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-600">Completed</h3>
          <p className="text-4xl font-bold text-green-600">
            {tasksCount.completed}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Active Tasks</h3>
          <ul className="space-y-2">
            {activeTasks.map((task) => (
              <li key={task.id} className="text-slate-700">
                • {task.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Completed Tasks</h3>
          <ul className="space-y-2">
            {completedTasks.map((task) => (
              <li key={task.id} className="text-slate-700 line-through">
                • {task.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default StatsPage;
