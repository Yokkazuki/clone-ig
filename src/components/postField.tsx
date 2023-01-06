import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IPost, postsActions } from "../store/posts";

import Post from "./post";

const PostField = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postsActions.fetchPosts());
    }, []);
    let posts = useSelector<RootState>((state) => state.posts.posts) as Array<IPost>;
    return <div className="post-field">
        {posts?.map((post, i) => {
            return <Post
                createdBy={post.createdBy}
                createdByThumbnail={post.createdByThumbnail}
                images={post.images}
                index={i}
                likeCount={post.likeCount}
                comment={post.comment}
                createdTimeBefore={post.createdTimeBefore}
                discription={post.discription}
                key={"Post_" + i}
            />
        })}
    </div>
}

export default PostField