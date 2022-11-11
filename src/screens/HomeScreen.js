import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import TodoList from "../components/home/TodoList";
import WelcomeMessage from "../components/home/WelcomeMessage";
import { HOME_SCREENS, NAVIGATORS } from "../utils/screens";

const HomeScreen = () => {
	const navigation = useNavigation();
	const categories = useSelector(({ TasksSlice }) => TasksSlice.categories);

	const noCategories = useMemo(() => {
		return Object.values(categories).length === 0;
	}, [categories]);

	const createNewOnPress = () => {
		navigation.navigate(NAVIGATORS.HOME, {
			screen: HOME_SCREENS.CREATE_OPTIONS_SCREEN
		});
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white" }}>
			<View className="h-full w-full justify-start py-4">
				{noCategories ? <WelcomeMessage /> : <TodoList />}
			</View>
			{!noCategories && (
				<Pressable
					onPress={createNewOnPress}
					className="justify-center items-center bottom-8 right-4 absolute h-16 w-16 rounded-full bg-blue-600 shadow-md"
				>
					<Icon name="add" size={54} color="white" />
				</Pressable>
			)}
		</SafeAreaView>
	);
};

export default HomeScreen;
