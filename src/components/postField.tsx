import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IPost, postsActions } from "../store/posts";
import style from "./postField.module.css";
import Post from "./post";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/post";

const PostField = () => {
  const dispatch = useDispatch();
  const getPostsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  useEffect(() => {
    if (getPostsQuery.isError) {
      dispatch(postsActions.fetchPosts(null));
    }
    if (getPostsQuery.isSuccess) {
      dispatch(postsActions.fetchPosts(getPostsQuery.data.posts));
    }
  }, [getPostsQuery.isFetched]);
  let posts = useSelector<RootState>(
    (state) => state.posts.posts
  ) as Array<IPost>;
  return (
    <div className={style.postField}>
      {getPostsQuery.isLoading && <div>Loading Post</div>}
      {posts?.map((post, i) => {
        return (
          <Post
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
        );
      })}
    </div>
  );
};

export default PostField;
