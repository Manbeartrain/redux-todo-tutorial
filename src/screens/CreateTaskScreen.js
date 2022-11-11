import React, { useMemo, useState } from "react";
import { View, Text, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-native-uuid";
import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import { setTasks } from "../redux/TasksSlice";
import { StackActions, useNavigation } from "@react-navigation/native";

const CreateTaskScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const categories = useSelector(({ TasksSlice }) => TasksSlice.categories);
	const tasks = useSelector(({ TasksSlice }) => TasksSlice.tasks);

	const [category, setCategory] = useState("");
	const [name, setName] = useState("");

	const isNameOrCategoryEmpty = useMemo(() => {
		return name === "" || category === "";
	}, [category, name]);

	const createTaskOnPress = () => {
		let tasksCopy = { ...tasks };
		const id = uuid.v4();
		tasksCopy[id] = { id, name, category, completed: false };

		dispatch(setTasks(tasksCopy));

		navigation.dispatch(StackActions.popToTop());
	};

	return (
		<View className="h-full w-full justify-center px-8">
			<Text className="text-2xl font-bold self-center">Category</Text>
			<ItemSeparator separatorStyle="h-4" />
			<View className="w-full p-4 bg-white rounded-lg">
				<RNPickerSelect
					style={{
						placeholder: {
							color: "gray"
						},
						inputIOS: {
							textAlign: "center"
						}
					}}
					onValueChange={(value) => setCategory(value)}
					items={Object.values(categories).map((category) => ({
						label: category.name,
						value: category.name
					}))}
				/>
			</View>
			<ItemSeparator separatorStyle="h-8" />
			<Text className="text-2xl font-bold self-center">Task Name</Text>
			<ItemSeparator separatorStyle="h-4" />
			<TextInput
				className="rounded-lg bg-white w-full p-4 text-center"
				placeholder="Name for task"
				placeholderTextColor="gray"
				onChangeText={setName}
			/>
			<ItemSeparator separatorStyle="h-4" />
			<Button
				onPress={createTaskOnPress}
				disabled={isNameOrCategoryEmpty}
				label="Create task"
				buttonColor="bg-blue-600"
				textColor="text-white"
			/>
		</View>
	);
};

export default CreateTaskScreen;
