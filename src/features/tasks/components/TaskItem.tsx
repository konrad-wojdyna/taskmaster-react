import { useAppDispatch } from "../../../store/hooks";
import { Task } from "../../../types/Task";

import { toggleComplete } from "../taskSlice";
interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => dispatch(toggleComplete(task.id))}>
        {task.completed ? "Completed" : "Not completed"}
      </button>
    </li>
  );
};
export default TaskItem;
