import { createSlice } from "@reduxjs/toolkit";

export const TasksSlice = createSlice({
	name: "TasksSlice",
	initialState: {
		categories: {},
		tasks: {},
		selectedCategory: {},
		selectedTask: {}
	},
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
		setTasks: (state, action) => {
			state.tasks = action.payload;
		},
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
		setSelectedTask: (state, action) => {
			state.selectedTask = action.payload;
		}
	}
});

export const { setCategories, setTasks, setSelectedCategory, setSelectedTask } =
	TasksSlice.actions;
export default TasksSlice.reducer;
