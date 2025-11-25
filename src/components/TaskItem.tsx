import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};
export default TaskItem;
