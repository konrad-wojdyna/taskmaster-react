import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../store/hooks";
import { addTask } from "../taskSlice";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { taskSchema, TaskFormData } from "../schemas/taskSchema";

const TaskForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskFormData) => {
    dispatch(addTask(data.text));
    reset();
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="task" className="block text-sm font-medium mb-2">
            New Task
          </label>
          <input
            id="task"
            type="text"
            {...register("text")}
            placeholder="Enter task description..."
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.text && (
            <p className="text-red-600 text-sm mt-1">{errors.text.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer bg-red-400
         text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Task"}
        </Button>
      </form>
    </Card>
  );
};
export default TaskForm;
