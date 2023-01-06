import { createSlice } from "@reduxjs/toolkit";

export interface Comment {
    createdBy: string;
    createdByThumbnail: string;
    createdTimeBefore: string;
    content: string;
}

export interface Post {
    createdBy: string;
    createdByThumbnail: string;
    createdTimeBefore: string;
    image: string[];
    discription: string;
    likeCount: number;
    comment: Comment[];
}

const postsSlice = createSlice({
    name: 'Posts',
    initialState: {
        posts: new Array<Post>()
    },
    reducers: {
        fetchPosts(state) {
            if (state.posts.length === 0) {
                const postsFetched = [
                    {
                        createdBy: "user1",
                        createdByThumbnail: "https://picsum.photos/id/229/200/300",
                        createdTimeBefore: "23m",
                        image: ["https://picsum.photos/id/230/200/300", "https://picsum.photos/id/231/200/300", "https://picsum.photos/id/232/200/300", "https://picsum.photos/id/233/200/300", "https://picsum.photos/id/234/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user2",
                        createdByThumbnail: "https://picsum.photos/id/264/200/300",
                        createdTimeBefore: "30m",
                        image: ["https://picsum.photos/id/235/200/300", "https://picsum.photos/id/236/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user3",
                        createdByThumbnail: "https://picsum.photos/id/265/200/300",
                        createdTimeBefore: "34m",
                        image: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/238/200/300", "https://picsum.photos/id/239/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user4",
                        createdByThumbnail: "https://picsum.photos/id/268/200/300",
                        createdTimeBefore: "34m",
                        image: ["https://picsum.photos/id/240/200/300", "https://picsum.photos/id/241/200/300", "https://picsum.photos/id/242/200/300", "https://picsum.photos/id/243/200/300", "https://picsum.photos/id/244/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user5",
                        createdByThumbnail: "https://picsum.photos/id/269/200/300",
                        createdTimeBefore: "40m",
                        image: ["https://picsum.photos/id/245/200/300", "https://picsum.photos/id/246/200/300", "https://picsum.photos/id/247/200/300", "https://picsum.photos/id/248/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user6",
                        createdByThumbnail: "https://picsum.photos/id/270/200/300",
                        createdTimeBefore: "42m",
                        image: ["https://picsum.photos/id/249/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user7",
                        createdByThumbnail: "https://picsum.photos/id/280/200/300",
                        createdTimeBefore: "50m",
                        image: ["https://picsum.photos/id/250/200/300", "https://picsum.photos/id/251/200/300", "https://picsum.photos/id/252/200/300", "https://picsum.photos/id/253/200/300", "https://picsum.photos/id/254/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user8",
                        createdByThumbnail: "https://picsum.photos/id/281/200/300",
                        createdTimeBefore: "1h",
                        image: ["https://picsum.photos/id/255/200/300", "https://picsum.photos/id/256/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user9",
                        createdByThumbnail: "https://picsum.photos/id/282/200/300",
                        createdTimeBefore: "1.2h",
                        image: ["https://picsum.photos/id/257/200/300", "https://picsum.photos/id/258/200/300", "https://picsum.photos/id/259/200/300"],
                        discription: "This is the discription",
                        likeCount: 1000,
                        comment: []
                    },
                    {
                        createdBy: "user10",
                        createdByThumbnail: "https://picsum.photos/id/283/200/300",
                        createdTimeBefore: "2h",
                        image: ["https://picsum.photos/id/260/200/300", "https://picsum.photos/id/261/200/300", "https://picsum.photos/id/262/200/300", "https://picsum.photos/id/263/200/300"],
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