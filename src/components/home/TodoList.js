import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Categories from "./Categories";
import { ItemSeparator } from "@digital-art-dealers/react-native-component-lib";
import Tasks from "./Tasks";

const TodoList = () => {
	const user = useSelector(({ UserSlice }) => UserSlice.user);
	return (
		<View className="w-full h-full">
			<Text className="text-4xl font-bold px-4">
				Welcome back, {user?.username}!
			</Text>
			<ItemSeparator separatorStyle="h-8" />
			<Categories />
			<ItemSeparator separatorStyle="h-16" />
			<Tasks />
		</View>
	);
};

export default TodoList;
