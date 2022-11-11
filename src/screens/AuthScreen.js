import { View, SafeAreaView, Text, TextInput } from "react-native";
import React, { useState } from "react";
import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice";
import { StackActions, useNavigation } from "@react-navigation/native";
import { NAVIGATORS } from "../utils/screens";

const AuthScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");

	const createProfileOnPress = () => {
		dispatch(
			setUser({
				email,
				username
			})
		);
		navigation.dispatch(StackActions.replace(NAVIGATORS.LANDING));
	};

	return (
		<SafeAreaView>
			<View className="w-full h-full justify-center px-8">
				<Text className="text-5xl font-extrabold text-center">Welcome!</Text>
				<Text className="text-lg font-light text-center">
					Please create a new profile to start organizing your day
				</Text>
				<ItemSeparator separatorStyle="h-8" />
				<TextInput
					className="bg-white rounded-lg w-full p-4"
					placeholder="Enter your email address"
					placeholderTextColor="gray"
					onChangeText={setEmail}
				/>
				<ItemSeparator separatorStyle="h-4" />
				<TextInput
					className="bg-white rounded-lg w-full p-4"
					placeholder="Enter a username"
					placeholderTextColor="gray"
					onChangeText={setUsername}
				/>
				<ItemSeparator separatorStyle="h-4" />
				<Button
					onPress={createProfileOnPress}
					type="primary"
					buttonColor="bg-blue-600"
					textColor="text-white"
					label="Create profile"
				/>
			</View>
		</SafeAreaView>
	);
};

export default AuthScreen;
