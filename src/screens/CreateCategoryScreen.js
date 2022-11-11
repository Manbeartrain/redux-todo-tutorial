import React, { useMemo, useState } from "react";
import { View, Text, TextInput } from "react-native";
import uuid from "react-native-uuid";
import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import { useDispatch, useSelector } from "react-redux";
import { StackActions, useNavigation } from "@react-navigation/native";
import { setCategories } from "../redux/TasksSlice";

const CreateCategoryScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const categories = useSelector(({ TasksSlice }) => TasksSlice.categories);
	const [name, setName] = useState("");

	const isNameEmpty = useMemo(() => {
		return name === "";
	}, [name]);

	const createCategoryOnPress = () => {
		let categoriesCopy = { ...categories };
		categoriesCopy[uuid.v4()] = { name };
		dispatch(setCategories(categoriesCopy));
		navigation.dispatch(StackActions.popToTop());
	};
	return (
		<View className="h-full w-full justify-center px-8">
			<Text className="text-2xl font-bold self-center">Category Name</Text>
			<ItemSeparator separatorStyle="h-4" />
			<TextInput
				className="rounded-lg bg-white w-full p-4 text-center"
				onChangeText={setName}
			/>
			<ItemSeparator separatorStyle="h-4" />
			<Button
				onPress={createCategoryOnPress}
				label="Create category"
				buttonColor="bg-blue-600"
				textColor="text-white"
				disabled={isNameEmpty}
			/>
		</View>
	);
};

export default CreateCategoryScreen;
