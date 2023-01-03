import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'User',
    initialState: {
        isLogin: false,
        // profile
        name: "User",
        username: "user",
        password: "user",
        website: "",
        bio: "",
        email: "user@email.com",
        phone: "1234 5678",
        gender: "Male",
        similarAccountSuggestion: true,
        // email notifications 
        feedback: true,
        reminder: true,
        product: true,
        news: true,
        support: true
    },
    reducers: {
        login(state, action) {
            state.isLogin = true;
        },
        logout(state, action) {
            state.isLogin = false;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;