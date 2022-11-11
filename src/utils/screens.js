import React from "react";
import CreateCategoryScreen from "../screens/CreateCategoryScreen";
import CreateOptionsScreen from "../screens/CreateOptionsScreen";
import CreateTaskScreen from "../screens/CreateTaskScreen";
import EditTaskScreen from "../screens/EditTaskScreen";
import HomeScreen from "../screens/HomeScreen";

const MODAL_SCREEN_OPTIONS = {
	presentation: "modal",
	headerBackTitle: "Back"
};

export const NAVIGATORS = {
	AUTH: "Auth",
	HOME: "Home",
	LANDING: "Landing Stack"
};

export const HOME_SCREENS = {
	HOME_SCREEN: "Home Screen",
	CREATE_OPTIONS_SCREEN: "Create Options",
	CREATE_CATEGORY_SCREEN: "Create Category",
	CREATE_TASK_SCREEN: "Create Task",
	EDIT_TASK_SCREEN: "Edit Task"
};

export const HOME_SCREENS_ARRAY = [
	{
		name: HOME_SCREENS.HOME_SCREEN,
		component: (props) => <HomeScreen {...props} />,
		options: { headerShown: false }
	},
	{
		name: HOME_SCREENS.CREATE_OPTIONS_SCREEN,
		component: (props) => <CreateOptionsScreen {...props} />,
		options: { ...MODAL_SCREEN_OPTIONS, headerTitle: "" }
	},
	{
		name: HOME_SCREENS.CREATE_CATEGORY_SCREEN,
		component: (props) => <CreateCategoryScreen {...props} />,
		options: MODAL_SCREEN_OPTIONS
	},
	{
		name: HOME_SCREENS.CREATE_TASK_SCREEN,
		component: (props) => <CreateTaskScreen {...props} />,
		options: MODAL_SCREEN_OPTIONS
	},
	{
		name: HOME_SCREENS.EDIT_TASK_SCREEN,
		component: (props) => <EditTaskScreen {...props} />,
		options: MODAL_SCREEN_OPTIONS
	}
];
