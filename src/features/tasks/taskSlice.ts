import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types/Task";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build TaskMaster", completed: false },
  ],
};

const taskSlices = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = taskSlices.actions;

export default taskSlices.reducer;
