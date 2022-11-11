import { View, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import { setTasks } from "../redux/TasksSlice";
import { useNavigation } from "@react-navigation/native";

const EditTaskScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const selectedTask = useSelector(({ TasksSlice }) => TasksSlice.selectedTask);
	const tasks = useSelector(({ TasksSlice }) => TasksSlice.tasks);

	const deleteTaskOnPress = () => {
		let tasksCopy = { ...tasks };
		delete tasksCopy[selectedTask.id];
		dispatch(setTasks(tasksCopy));
		navigation.goBack();
	};

	const completeTaskOnPress = () => {
		let tasksCopy = { ...tasks };
		tasksCopy[selectedTask.id] = {
			...tasksCopy[selectedTask.id],
			completed: true
		};

		dispatch(setTasks(tasksCopy));
		navigation.goBack();
	};

	return (
		<View className="h-full w-full justify-center px-4">
			<Text className="text-2xl font-bold tracking-widest uppercase self-center">
				{selectedTask?.name}
			</Text>
			<ItemSeparator separatorStyle="h-4" />
			<Button
				onPress={completeTaskOnPress}
				label="Complete Task"
				buttonColor="bg-blue-600"
				textColor="text-white"
			/>
			<ItemSeparator separatorStyle="h-4" />
			<Button
				onPress={deleteTaskOnPress}
				label="Delete Task"
				buttonColor="bg-red-600"
				textColor="text-white"
			/>
		</View>
	);
};

export default EditTaskScreen;
