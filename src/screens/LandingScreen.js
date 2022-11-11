import React, { useEffect, useMemo } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import PropTypes from "prop-types";

import { NAVIGATORS } from "../utils/screens";
import { useSelector } from "react-redux";

const LandingAnimation = require("../assets/lottie/landingAnimation.json");

const LandingScreen = ({ navigation }) => {
	const user = useSelector(({ UserSlice }) => UserSlice.user);

	const isUserSet = useMemo(() => {
		return user?.email && user?.username;
	}, [user]);

	useEffect(() => {
		if (isUserSet) {
			navigation.replace(NAVIGATORS.HOME);
		} else {
			navigation.replace(NAVIGATORS.AUTH);
		}
	}, []);

	return (
		<View className="h-full w-full justify-center items-center">
			<LottieView source={LandingAnimation} className="w-[70%]" autoPlay loop />
		</View>
	);
};

LandingScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default LandingScreen;
