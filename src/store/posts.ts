import { createSlice } from "@reduxjs/toolkit";

export interface IComment {
    createdBy: string;
    createdByThumbnail: string;
    createdTimeBefore: string;
    content: string;
}

export interface IPost {
    createdBy: string;
    createdByThumbnail: string;
    createdTimeBefore: string;
    images: string[];
    discription: string;
    likeCount: number;
    comment: IComment[];
}

const postsSlice = createSlice({
    name: 'Posts',
    initialState: {
        posts: new Array<IPost>()
    },
    reducers: {
        fetchPosts(state) {
            if (state.posts.length === 0) {
                const postsFetched = [
                    {
                        createdBy: "user1",
                        createdByThumbnail: "https://picsum.photos/id/229/200/300",
                        createdTimeBefore: "23m",
                        images: ["https://picsum.photos/id/230/200/300", "https://picsum.photos/id/231/200/300", "https://picsum.photos/id/232/200/300", "https://picsum.photos/id/233/200/300", "https://picsum.photos/id/234/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user2",
                        createdByThumbnail: "https://picsum.photos/id/264/200/300",
                        createdTimeBefore: "30m",
                        images: ["https://picsum.photos/id/235/200/300", "https://picsum.photos/id/236/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user3",
                        createdByThumbnail: "https://picsum.photos/id/265/200/300",
                        createdTimeBefore: "34m",
                        images: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/238/200/300", "https://picsum.photos/id/239/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user4",
                        createdByThumbnail: "https://picsum.photos/id/268/200/300",
                        createdTimeBefore: "34m",
                        images: ["https://picsum.photos/id/240/200/300", "https://picsum.photos/id/241/200/300", "https://picsum.photos/id/242/200/300", "https://picsum.photos/id/243/200/300", "https://picsum.photos/id/244/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user5",
                        createdByThumbnail: "https://picsum.photos/id/269/200/300",
                        createdTimeBefore: "40m",
                        images: ["https://picsum.photos/id/284/200/300", "https://picsum.photos/id/101/200/300", "https://picsum.photos/id/247/200/300", "https://picsum.photos/id/248/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user6",
                        createdByThumbnail: "https://picsum.photos/id/270/200/300",
                        createdTimeBefore: "42m",
                        images: ["https://picsum.photos/id/249/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user7",
                        createdByThumbnail: "https://picsum.photos/id/280/200/300",
                        createdTimeBefore: "50m",
                        images: ["https://picsum.photos/id/250/200/300", "https://picsum.photos/id/251/200/300", "https://picsum.photos/id/252/200/300", "https://picsum.photos/id/253/200/300", "https://picsum.photos/id/254/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user8",
                        createdByThumbnail: "https://picsum.photos/id/281/200/300",
                        createdTimeBefore: "1h",
                        images: ["https://picsum.photos/id/255/200/300", "https://picsum.photos/id/256/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user9",
                        createdByThumbnail: "https://picsum.photos/id/282/200/300",
                        createdTimeBefore: "1.2h",
                        images: ["https://picsum.photos/id/257/200/300", "https://picsum.photos/id/258/200/300", "https://picsum.photos/id/259/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user10",
                        createdByThumbnail: "https://picsum.photos/id/283/200/300",
                        createdTimeBefore: "2h",
                        images: ["https://picsum.photos/id/260/200/300", "https://picsum.photos/id/261/200/300", "https://picsum.photos/id/100/200/300", "https://picsum.photos/id/263/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                ]
                state.posts.push(...postsFetched);
            }
        }
    }
});

export const postsActions = postsSlice.actions;
export default postsSlice;