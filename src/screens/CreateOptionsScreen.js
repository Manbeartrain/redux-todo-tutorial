import { View } from "react-native";
import React from "react";
import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import { useNavigation } from "@react-navigation/native";
import { HOME_SCREENS, NAVIGATORS } from "../utils/screens";

const CreateOptionsScreen = () => {
	const navigation = useNavigation();

	const createTaskOnPress = () => {
		navigation.navigate(NAVIGATORS.HOME, {
			screen: HOME_SCREENS.CREATE_TASK_SCREEN
		});
	};
	const createCategoryOnPress = () => {
		navigation.navigate(NAVIGATORS.HOME, {
			screen: HOME_SCREENS.CREATE_CATEGORY_SCREEN
		});
	};

	return (
		<View className="h-full w-full justify-center px-8 bg-white">
			<Button
				onPress={createCategoryOnPress}
				label="Create Category"
				buttonColor="bg-blue-600"
				textColor="text-white"
			/>
			<ItemSeparator separatorStyle="h-4" />
			<Button
				onPress={createTaskOnPress}
				label="Create Task"
				buttonColor="bg-blue-600"
				textColor="text-white"
			/>
		</View>
	);
};

export default CreateOptionsScreen;
