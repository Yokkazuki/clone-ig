import { createSlice } from "@reduxjs/toolkit";

export interface IStory {
  createdBy: string;
  createdByThumbnail: string;
  createdTimeBefore: string;
  image: string[];
  isRead: boolean;
}

const storiesSlice = createSlice({
  name: "Stories",
  initialState: {
    stories: new Array<IStory>(),
  },
  reducers: {
    fetchStories(state, action) {
      if (action.payload) {
        console.log("Story: fetched data");
        state.stories = action.payload;
      } else {
        console.log("Story: hard coded data");
        const storiesFetched = [
          {
            createdBy: "user1",
            createdByThumbnail: "https://picsum.photos/id/229/600/800",
            createdTimeBefore: "23m",
            image: [
              "https://picsum.photos/id/230/600/800",
              "https://picsum.photos/id/231/600/800",
              "https://picsum.photos/id/232/600/800",
              "https://picsum.photos/id/233/600/800",
              "https://picsum.photos/id/234/600/800",
            ],
            isRead: false,
          },
          {
            createdBy: "user2",
            createdByThumbnail: "https://picsum.photos/id/264/600/800",
            createdTimeBefore: "30m",
            image: [
              "https://picsum.photos/id/235/600/800",
              "https://picsum.photos/id/236/600/800",
            ],
            isRead: false,
          },
          {
            createdBy: "user3",
            createdByThumbnail: "https://picsum.photos/id/265/600/800",
            createdTimeBefore: "34m",
            image: [
              "https://picsum.photos/id/237/600/800",
              "https://picsum.photos/id/238/600/800",
              "https://picsum.photos/id/239/600/800",
            ],
            isRead: false,
          },
          {
            createdBy: "user4",
            createdByThumbnail: "https://picsum.photos/id/268/600/800",
            createdTimeBefore: "34m",
            image: [
              "https://picsum.photos/id/240/600/800",
              "https://picsum.photos/id/241/600/800",
              "https://picsum.photos/id/242/600/800",
              "https://picsum.photos/id/243/600/800",
              "https://picsum.photos/id/244/600/800",
            ],
            isRead: false,
          },
          {
            createdBy: "user5",
            createdByThumbnail: "https://picsum.photos/id/269/600/800",
            createdTimeBefore: "40m",
            image: [
              "https://picsum.photos/id/284/600/800",
              "https://picsum.photos/id/101/600/800",
              "https://picsum.photos/id/247/600/800",
              "https://picsum.photos/id/248/600/800",
            ],
            isRead: false,
          },
          {
            createdBy: "user6",
            createdByThumbnail: "https://picsum.photos/id/270/600/800",
            createdTimeBefore: "42m",
            image: ["https://picsum.photos/id/249/600/800"],
            isRead: false,
          },
          {
            createdBy: "user7",
            createdByThumbnail: "https://picsum.photos/id/280/600/800",
            createdTimeBefore: "50m",
            image: [
              "https://picsum.photos/id/250/600/800",
              "https://picsum.photos/id/251/600/800",
              "https://picsum.photos/id/252/600/800",
              "https://picsum.photos/id/253/600/800",
              "https://picsum.photos/id/254/600/800",
            ],
            isRead: false,
          },
          {
            createdBy: "user8",
            createdByThumbnail: "https://picsum.photos/id/281/600/800",
            createdTimeBefore: "1h",
            image: [
              "https://picsum.photos/id/255/600/800",
              "https://picsum.photos/id/256/600/800",
            ],
            isRead: false,
          },
          {
            createdBy: "user9",
            createdByThumbnail: "https://picsum.photos/id/282/600/800",
            createdTimeBefore: "1.2h",
            image: [
              "https://picsum.photos/id/257/600/800",
              "https://picsum.photos/id/258/600/800",
              "https://picsum.photos/id/259/600/800",
            ],
            isRead: false,
          },
          {
            createdBy: "user10",
            createdByThumbnail: "https://picsum.photos/id/283/600/800",
            createdTimeBefore: "2h",
            image: [
              "https://picsum.photos/id/260/600/800",
              "https://picsum.photos/id/261/600/800",
              "https://picsum.photos/id/100/600/800",
              "https://picsum.photos/id/263/600/800",
            ],
            isRead: false,
          },
        ];
        state.stories = storiesFetched;
      }
    },
  },
});

export const storiesActions = storiesSlice.actions;
export default storiesSlice;
