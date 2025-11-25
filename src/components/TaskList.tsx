import TaskItem from "./TaskItem";
import { Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

const TaskList = ({ tasks, onDeleteTask }: TaskListProps) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />;
      })}
    </ul>
  );
};
export default TaskList;
