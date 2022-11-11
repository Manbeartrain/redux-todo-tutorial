import React, { useMemo } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ItemSeparator } from "@digital-art-dealers/react-native-component-lib";
import { setSelectedTask } from "../../redux/TasksSlice";
import { useNavigation } from "@react-navigation/native";
import { HOME_SCREENS, NAVIGATORS } from "../../utils/screens";

const TaskList = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const selectedCategory = useSelector(
		({ TasksSlice }) => TasksSlice.selectedCategory
	);

	const tasks = useSelector(({ TasksSlice }) => TasksSlice.tasks);

	const categoryTasks = useMemo(() => {
		return Object.values(tasks).filter(
			(task) => task.category === selectedCategory.name
		);
	}, [selectedCategory, tasks]);

	const renderEmptyListComponent = () => (
		<View className="w-full h-80 flex justify-center items-start">
			<Text className="text-gray-400 text-lg font-bold">No Tasks found</Text>
			<Text className="text-gray-400 text-base font-light">
				{"Let's create some tasks for this category"}
			</Text>
		</View>
	);

	const renderSeparator = () => <ItemSeparator separatorStyle="h-2" />;

	const renderTaskItem = ({ item }) => {
		const handleEditTaskOnPress = () => {
			dispatch(setSelectedTask(item));
			navigation.navigate(NAVIGATORS.HOME, {
				screen: HOME_SCREENS.EDIT_TASK_SCREEN
			});
		};

		return (
			<Pressable
				onPress={handleEditTaskOnPress}
				className="w-full py-3 flex-row bg-blue-600 rounded-lg shadow-md flex justify-start items-center px-4"
			>
				<BouncyCheckbox
					size={32}
					disableBuiltInState
					isChecked={item.completed}
					fillColor="blue"
					innerIconStyle={{ borderWidth: 2 }}
				/>
				<Text className="text-lg font-normal text-white tracking-widest">
					{item?.name}
				</Text>
			</Pressable>
		);
	};

	return (
		<View>
			<Text className="text-black uppercase tracking-widest text-sm font-bold">
				{selectedCategory?.name} Tasks
			</Text>
			<FlatList
				className="w-full h-full py-4 "
				data={categoryTasks}
				renderItem={renderTaskItem}
				keyExtractor={(item) => item.name}
				ItemSeparatorComponent={renderSeparator}
				ListEmptyComponent={renderEmptyListComponent}
			/>
		</View>
	);
};

export default TaskList;
