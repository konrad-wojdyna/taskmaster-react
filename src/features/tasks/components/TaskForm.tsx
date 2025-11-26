import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { addTask } from "../taskSlice";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TaskForm = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === "") return;

    dispatch(addTask(input));
    setInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="task" className="block text-sm font-medium mb-2">
            New Task
          </label>
          <input
            id="task"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task description..."
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer bg-red-400
         text-white"
        >
          Add Task
        </Button>
      </form>
    </Card>
  );
};
export default TaskForm;
