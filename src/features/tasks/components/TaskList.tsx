import TaskItem from "./TaskItem";
import { Task } from "../../../types/Task";
import { useAppDispatch } from "../../../store/hooks";
import { deleteTask } from "../taskSlice";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} onDelete={handleDelete} />;
      })}
    </ul>
  );
};
export default TaskList;
