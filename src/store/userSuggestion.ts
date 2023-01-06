import { createSlice } from "@reduxjs/toolkit";

export interface IUserSuggestion {
    username: string;
    thumbnail: string;
}

const userSuggestionsSlice = createSlice({
    name: 'User-Suggestion',
    initialState: {
        userSuggestions: new Array<IUserSuggestion>()
    },
    reducers: {
        fetchUserSuggestion(state) {
            if (state.userSuggestions.length === 0) {
                const userSuggestionsFetched = [
                    {
                        username: "user1",
                        thumbnail: "https://picsum.photos/id/229/200/300"
                    },
                    {
                        username: "user2",
                        thumbnail: "https://picsum.photos/id/264/200/300"
                    },
                    {
                        username: "user3",
                        thumbnail: "https://picsum.photos/id/265/200/300"
                    },
                    {
                        username: "user4",
                        thumbnail: "https://picsum.photos/id/268/200/300"
                    },
                    {
                        username: "user5",
                        thumbnail: "https://picsum.photos/id/269/200/300"
                    },
                    {
                        username: "user6",
                        thumbnail: "https://picsum.photos/id/270/200/300"
                    },
                ];

                state.userSuggestions.push(...userSuggestionsFetched);
            }
        }
    }
});

export const userSuggestionsActions = userSuggestionsSlice.actions;
export default userSuggestionsSlice;