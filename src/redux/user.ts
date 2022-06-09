import { createSlice } from '@reduxjs/toolkit';

import { fetchAllNews } from './requests';

const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false,
        Loading: false,
        error: false,
        Success: false,
        username: "",
        NewsData: [{title : "",summary: "",media: "",rights: "",published_date: "",link: ""}],
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllNews.fulfilled, (state, { payload }) => {
            state.NewsData = payload
        })
    }
})

export const { loginStart, loginSuccess, loginFailure,logOut } = userSlice.actions;
export default userSlice.reducer;