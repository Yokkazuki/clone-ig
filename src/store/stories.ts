import { createSlice } from "@reduxjs/toolkit";

export interface Stories {
    createdBy: string;
    createdByThumbnail: string;
    createdTimeBefore: string;
    image: string[];
    isRead: boolean;
}

const storiesSlice = createSlice({
    name: 'Stories',
    initialState: {
        stories: new Array<Stories>()
    },
    reducers: {
        fetchStories(state) {
            if (state.stories.length === 0) {
                const storiesFetched = [
                    {
                        createdBy: "user1",
                        createdByThumbnail: "https://picsum.photos/id/229/200/300",
                        createdTimeBefore: "23m",
                        image: ["https://picsum.photos/id/230/200/300", "https://picsum.photos/id/231/200/300", "https://picsum.photos/id/232/200/300", "https://picsum.photos/id/233/200/300", "https://picsum.photos/id/234/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user2",
                        createdByThumbnail: "https://picsum.photos/id/264/200/300",
                        createdTimeBefore: "30m",
                        image: ["https://picsum.photos/id/235/200/300", "https://picsum.photos/id/236/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user3",
                        createdByThumbnail: "https://picsum.photos/id/265/200/300",
                        createdTimeBefore: "34m",
                        image: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/238/200/300", "https://picsum.photos/id/239/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user4",
                        createdByThumbnail: "https://picsum.photos/id/268/200/300",
                        createdTimeBefore: "34m",
                        image: ["https://picsum.photos/id/240/200/300", "https://picsum.photos/id/241/200/300", "https://picsum.photos/id/242/200/300", "https://picsum.photos/id/243/200/300", "https://picsum.photos/id/244/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user5",
                        createdByThumbnail: "https://picsum.photos/id/269/200/300",
                        createdTimeBefore: "40m",
                        image: ["https://picsum.photos/id/245/200/300", "https://picsum.photos/id/246/200/300", "https://picsum.photos/id/247/200/300", "https://picsum.photos/id/248/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user6",
                        createdByThumbnail: "https://picsum.photos/id/270/200/300",
                        createdTimeBefore: "42m",
                        image: ["https://picsum.photos/id/249/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user7",
                        createdByThumbnail: "https://picsum.photos/id/280/200/300",
                        createdTimeBefore: "50m",
                        image: ["https://picsum.photos/id/250/200/300", "https://picsum.photos/id/251/200/300", "https://picsum.photos/id/252/200/300", "https://picsum.photos/id/253/200/300", "https://picsum.photos/id/254/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user8",
                        createdByThumbnail: "https://picsum.photos/id/281/200/300",
                        createdTimeBefore: "1h",
                        image: ["https://picsum.photos/id/255/200/300", "https://picsum.photos/id/256/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user9",
                        createdByThumbnail: "https://picsum.photos/id/282/200/300",
                        createdTimeBefore: "1.2h",
                        image: ["https://picsum.photos/id/257/200/300", "https://picsum.photos/id/258/200/300", "https://picsum.photos/id/259/200/300"],
                        isRead: false,
                    },
                    {
                        createdBy: "user10",
                        createdByThumbnail: "https://picsum.photos/id/283/200/300",
                        createdTimeBefore: "2h",
                        image: ["https://picsum.photos/id/260/200/300", "https://picsum.photos/id/261/200/300", "https://picsum.photos/id/262/200/300", "https://picsum.photos/id/263/200/300"],
                        isRead: false,
                    },
                ]
                state.stories.push(...storiesFetched);
            }
        }
    }
});

export const storiesActions = storiesSlice.actions;
export default storiesSlice;