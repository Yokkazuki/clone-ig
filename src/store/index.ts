import { configureStore } from "@reduxjs/toolkit";
import storiesSlice from "./stories";
import userSlice from "./user";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        stories: storiesSlice.reducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;