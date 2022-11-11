import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSeparator } from "@digital-art-dealers/react-native-component-lib";
import { setSelectedCategory } from "../../redux/TasksSlice";

const Categories = () => {
	const dispatch = useDispatch();
	const categories = useSelector(({ TasksSlice }) => TasksSlice.categories);
	const tasks = useSelector(({ TasksSlice }) => TasksSlice.tasks);

	const renderSeparatorComponent = () => <ItemSeparator separatorStyle="w-2" />;

	const renderCategory = ({ item }) => {
		const categoryTasks = Object.values(tasks).filter(
			(task) => task.category === item?.name
		);

		const categoryProgress = () => {
			const completedTasks = categoryTasks.filter((task) => task.completed);
			const progress = (completedTasks.length / categoryTasks.length) * 100;
			return progress + "%";
		};

		const selectCategoryOnPress = () => {
			dispatch(setSelectedCategory(item));
		};

		return (
			<Pressable
				onPress={selectCategoryOnPress}
				className="w-48 h-full bg-blue-600 rounded-2xl flex justify-center items-start px-4"
			>
				<Text className="text-sm text-gray-300">
					{categoryTasks?.length} tasks
				</Text>
				<Text className="text-xl text-white font-bold tracking-widest">
					{item?.name}
				</Text>
				<ItemSeparator separatorStyle="h-2" />
				<View className="h-2 w-full bg-white">
					<View
						className=" bg-blue-800 h-full"
						style={{ width: categoryProgress() }}
					/>
				</View>
			</Pressable>
		);
	};

	return (
		<View className="h-40 w-full ">
			<Text className="text-black uppercase tracking-widest px-4 text-sm font-bold">
				Categories
			</Text>
			<ItemSeparator separatorStyle="h-3" />
			<FlatList
				className="w-full h-full px-4 "
				horizontal
				data={Object.values(categories)}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={renderSeparatorComponent}
				renderItem={renderCategory}
			/>
		</View>
	);
};

export default Categories;
