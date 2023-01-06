import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Story, storiesActions } from "../store/stories";
import BookmarkSvg from "../images/svgs/bookmark";
import CommentSvg from "../images/svgs/comment";
import HeartSvg from "../images/svgs/heart";
import ShareSvg from "../images/svgs/share";
import ThreeDotSvg from "../images/svgs/threeDot";
import "./home.css"
import Login from "./login";
import { useEffect, useState } from "react";
import { Post, postsActions } from "../store/posts";
import { UserSuggestion, userSuggestionsActions } from "../store/userSuggestion";

type HomeProps = {
    isLogin: boolean
}

const Home = (props: HomeProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(storiesActions.fetchStories());
        dispatch(postsActions.fetchPosts());
        dispatch(userSuggestionsActions.fetchUserSuggestion());
    }, []);
    let stories = useSelector<RootState>((state) => state.stories.stories) as Array<Story>;
    let posts = useSelector<RootState>((state) => state.posts.posts) as Array<Post>;
    let userSuggestions = useSelector<RootState>((state) => state.userSuggestions.userSuggestions) as Array<UserSuggestion>;
    const [isDisplayArrow, setIsDisplayArrow] = useState({ leftArrow: false, rightArrow: true });

    const getStoriesFieldMaxWidth = () => {
        const storiesContainer = document.getElementsByClassName("stories-container")[0];
        return storiesContainer.scrollWidth - storiesContainer.clientWidth;
    }

    const storiesScrollLeft = () => {
        const storiesContainer =
            document.getElementsByClassName("stories-container")[0];
        storiesContainer.scrollLeft -= 200;
        handleIsDisplayStoriesArrow(storiesContainer.scrollLeft -= 200);
    }
    const storiesScrollRight = () => {
        const storiesContainer =
            document.getElementsByClassName("stories-container")[0];
        storiesContainer.scrollLeft += 200;
        handleIsDisplayStoriesArrow(storiesContainer.scrollLeft += 200);
    }

    const handleIsDisplayStoriesArrow = (current: number) => {
        if (current <= 0) {
            setIsDisplayArrow({ leftArrow: false, rightArrow: true })
        } else if (current >= getStoriesFieldMaxWidth()) {
            setIsDisplayArrow({ leftArrow: true, rightArrow: false })
        } else if (current !== 0 && current !== getStoriesFieldMaxWidth()) {
            setIsDisplayArrow({ leftArrow: true, rightArrow: true })
        }
    }

    useEffect(() => {
        console.log(isDisplayArrow);
    }, [isDisplayArrow.leftArrow, isDisplayArrow.rightArrow])
    return <div>
        {/* <div className="developing">
            Developing
        </div> */}
        {!props.isLogin ? <Login /> :
            <div className="home">
                <div className="main-field">
                    <div className="stories-field">
                        <div className="stories-container">
                            {stories.length > 0 && stories?.map((story, i) => {
                                return <div className="story" key={story.createdBy}>
                                    <img src={story.createdByThumbnail} />
                                    <div className="username">{story.createdBy}</div>
                                </div>
                            })}
                        </div>
                        {isDisplayArrow.leftArrow && <div className="stories-arrow-left" onClick={storiesScrollLeft} />}
                        {isDisplayArrow.rightArrow && <div className="stories-arrow-right" onClick={storiesScrollRight} />}                    </div>

                    <div className="post-field">
                        {posts?.map((post, i) => {
                            return <div className="post" key={post.createdBy}>
                                <div className="post-header">
                                    <div className="user">
                                        <img src={post.createdByThumbnail} />
                                        <div className="username">{post.createdBy}</div>
                                    </div>
                                    <ThreeDotSvg />
                                </div>
                                <div className="post-image-field">
                                    <div className="post-image-container">
                                        <img src={post.image[0]} />
                                    </div>
                                    {<div className="image-arrow-left" />}
                                    {<div className="image-arrow-right" />}
                                </div>
                                <div className="post-bottom">
                                    <div className="post-action">
                                        <HeartSvg />
                                        <CommentSvg />
                                        <ShareSvg />
                                        <BookmarkSvg />
                                    </div>
                                    <div className="likes">{post.likeCount} likes</div>
                                    <div className="post-description">
                                        <div className="username">{post.createdBy} </div> <div className="description-content">{post.discription}</div>
                                    </div>
                                    <div className="post-comment">
                                        <div className="view-all-comment-btn">View all {post.comment.length} comments</div>
                                    </div>
                                    <div className="post-time-before"> {post.createdTimeBefore} ago</div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="user-field">
                    <div className="current-user">
                        <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                        <div className="user">
                            <div className="username">user</div>
                            <div className="name">user</div>
                        </div>
                        <div className="switch-btn">Switch</div>
                    </div>

                    <div className="user-suggestions">Suggestions For You</div>
                    <div className="suggestions-list">
                        {
                            userSuggestions?.map((userSuggestion, i) => {
                                return <div className="suggestion" key={userSuggestion.username}>
                                    <img src={userSuggestion.thumbnail} />
                                    <div className="user">
                                        <div className="username">{userSuggestion.username}</div>
                                        <div className="followed-by">Followed by someone</div>
                                    </div>
                                    <div className="follow-btn">follow</div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>}
    </div>
}

export default Home