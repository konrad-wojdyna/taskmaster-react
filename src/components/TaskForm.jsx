const TaskForm = () => {
  return (
    <form className="task-form">
      <input type="text" placeholder="What needs to be done?" />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TaskForm;
