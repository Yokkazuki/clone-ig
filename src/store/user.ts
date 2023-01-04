import { createSlice } from "@reduxjs/toolkit";

export interface userInfo {
    isLogin: boolean,
    // profile
    icon: string,
    name: string,
    username: string,
    password: string,
    website: string,
    bio: string,
    email: string,
    phone: string,
    gender: string,
    similarAccountSuggestion: boolean,
    // email notifications 
    feedback: boolean,
    reminder: boolean,
    product: boolean,
    news: boolean,
    support: boolean
}

const userSlice = createSlice({
    name: 'User',
    initialState: {
        isLogin: false,
        // profile
        icon: "https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg",
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
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;