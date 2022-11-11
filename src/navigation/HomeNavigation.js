import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HOME_SCREENS_ARRAY } from "../utils/screens";

const Stack = createStackNavigator();

const HomeNavigation = () => {
	return (
		<Stack.Navigator>
			{HOME_SCREENS_ARRAY.map((screen) => (
				<Stack.Screen
					key={screen.name}
					name={screen.name}
					options={screen.options}
				>
					{screen.component}
				</Stack.Screen>
			))}
		</Stack.Navigator>
	);
};

export default HomeNavigation;
