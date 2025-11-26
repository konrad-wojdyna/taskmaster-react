import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { addTask } from "../taskSlice";

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
