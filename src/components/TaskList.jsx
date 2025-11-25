import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />;
      })}
    </ul>
  );
};
export default TaskList;
