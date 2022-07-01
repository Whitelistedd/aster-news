import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false,
        Loading: false,
        error: false,
        Success: false,
        username: "",
        search: ""
    },
    reducers: {
        loginStart: (state) => {
            state.Loading = true
        },
        loginSuccess: (state,action) => {
            state.Loading = false;
            state.error = false;
            state.Success = true;
            state.loggedIn = true;
            state.username = action.payload;
        },
        loginFailure: (state) => {
            state.Loading = false;
            state.Success = false;
            state.error = true;
        },
        logOut: (state) => {
            state.loggedIn = false;
            state.Success = false;
        },
        setSearch: (state,action) => {
            state.search = action.payload.toLowerCase();
        },
    },
})

export const { loginStart, loginSuccess, loginFailure,logOut,setSearch } = userSlice.actions;
export default userSlice.reducer;