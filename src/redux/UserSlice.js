import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: {
		user: {}
	},
	reducers: {
		//TODO: add reducers
		setUser: (state, action) => {
			state.user = action.payload;
		}
	}
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
