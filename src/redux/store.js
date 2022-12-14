import AsyncStorage from "@react-native-async-storage/async-storage";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import UserSlice from "./UserSlice";
import TasksSlice from "./TasksSlice";

const reducers = combineReducers({
	UserSlice,
	TasksSlice
});

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: ["UserSlice", "TasksSlice"] // add reducers you want to persist here
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
});

export default store;
