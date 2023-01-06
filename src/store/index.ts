import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts";
import storiesSlice from "./stories";
import userSlice from "./user";
import userSuggestionsSlice from "./userSuggestion";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        stories: storiesSlice.reducer,
        posts: postsSlice.reducer,
        userSuggestions: userSuggestionsSlice.reducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;