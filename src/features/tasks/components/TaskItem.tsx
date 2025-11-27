import { useState } from "react";
import { Link } from "react-router-dom";
import { Task } from "../../../types/Task";
import { useAppDispatch } from "../../../store/hooks";
import { deleteTask, toggleComplete } from "../taskSlice";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setIsDialogOpen(false);
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}
            className="w-5 h-5 cursor-pointer"
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
            {task.completed && (
              <Badge variant="secondary" className="ml-2">
                Completed
              </Badge>
            )}
          </div>
        </div>

        {/* Delete Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Task</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete "{task.text}"? This action
                cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
}

export default TaskItem;
