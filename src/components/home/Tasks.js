import { View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";

const Tasks = () => {
	const selectedCategory = useSelector(
		({ TasksSlice }) => TasksSlice.selectedCategory
	);

	return (
		<View className="w-full flex-1  px-4">
			{!selectedCategory?.name ? null : <TaskList />}
		</View>
	);
};

export default Tasks;
