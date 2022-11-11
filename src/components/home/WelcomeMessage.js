import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import { useNavigation } from "@react-navigation/native";
import { HOME_SCREENS, NAVIGATORS } from "../../utils/screens";

const WelcomeMessage = () => {
	const navigation = useNavigation();
	const user = useSelector(({ UserSlice }) => UserSlice.user);

	const createCategoryOnPress = () => {
		navigation.navigate(NAVIGATORS.HOME, {
			screen: HOME_SCREENS.CREATE_CATEGORY_SCREEN
		});
	};

	return (
		<View className="w-full h-full justify-center px-8">
			<Text className="text-4xl font-extrabold tracking-widest text-center">
				Welcome, {user?.username}!
			</Text>
			<Text className="text-lg font-light text-center">
				{"Let's get started by creating some task categories."}
			</Text>
			<ItemSeparator separatorStyle="h-4" />
			<Button
				onPress={createCategoryOnPress}
				label="Create category"
				buttonColor="bg-blue-600"
				textColor="text-white"
			/>
		</View>
	);
};

export default WelcomeMessage;
