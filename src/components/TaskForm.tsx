import { useState, ChangeEvent, FormEvent } from "react";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === "") return;

    onAddTask(input);
    setInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TaskForm;
