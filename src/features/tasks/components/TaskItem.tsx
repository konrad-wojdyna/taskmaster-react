import { Link } from "react-router-dom";
import { Task } from "../../../types/Task";
import { useAppDispatch } from "../../../store/hooks";
import { deleteTask, toggleComplete } from "../taskSlice";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "lucide-react";
interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}
            className="w-5 h-5"
          />
          <div>
            <Link
              to={`/tasks/${task.id}`}
              className={`hover:text-blue-600 font-medium ${
                task.completed
                  ? "line-through text-slate-400"
                  : "text-slate-900"
              }`}
            >
              {task.text}
            </Link>
            {task.completed && <Badge className="ml-2">Completed</Badge>}
          </div>
        </div>
        <Button
          onClick={() => dispatch(deleteTask(task.id))}
          variant="destructive"
          size="sm"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};
export default TaskItem;
