import { RootState } from "../../store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectLoading = (state: RootState) => state.tasks.loading;
export const selectError = (state: RootState) => state.tasks.error;

export const selectCompletedTasks = createSelector([selectTasks], (tasks) =>
  tasks.filter((task) => task.completed)
);

export const selectActiveTasks = createSelector([selectTasks], (tasks) =>
  tasks.filter((task) => !task.completed)
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => ({
  total: tasks.length,
  completed: tasks.filter((t) => t.completed).length,
  active: tasks.filter((t) => !t.completed).length,
}));
