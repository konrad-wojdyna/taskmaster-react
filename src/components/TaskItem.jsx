const TaskItem = ({ task, onDelete }) => {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};
export default TaskItem;
