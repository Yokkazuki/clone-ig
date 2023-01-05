import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Stories, storiesActions } from "../store/stories";
import BookmarkSvg from "../images/svgs/bookmark";
import CommentSvg from "../images/svgs/comment";
import HeartSvg from "../images/svgs/heart";
import ShareSvg from "../images/svgs/share";
import ThreeDotSvg from "../images/svgs/threeDot";
import "./home.css"
import Login from "./login";
import { useEffect, useState } from "react";

type HomeProps = {
    isLogin: boolean
}

const Home = (props: HomeProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(storiesActions.fetchStories());
    }, []);
    let stories = useSelector<RootState>((state) => state.stories.stories) as Array<Stories>;
    const storiesContainer = document.getElementsByClassName("stories-container")[0];
    const [isDisplayArrow, setIsDisplayArrow] = useState({ leftArrow: false, rightArrow: true });

    const getStoriesFieldMaxWidth = () => {
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
        console.log(current, getStoriesFieldMaxWidth())
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
                        <div className="post">
                            <div className="post-header">
                                <div className="user">
                                    <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                                    <div className="username">user</div>
                                </div>
                                <ThreeDotSvg />
                            </div>
                            <div className="post-image-container">
                                <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            </div>
                            <div className="post-bottom">
                                <div className="post-action">
                                    <HeartSvg />
                                    <CommentSvg />
                                    <ShareSvg />
                                    <BookmarkSvg />
                                </div>
                                <div className="likes">1000 likes</div>
                                <div className="post-description">
                                    <div className="username">user</div> this is description
                                </div>
                                <div className="post-comment">
                                    this is comment
                                </div>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-header">
                                <div className="user">
                                    <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                                    <div className="username">user</div>
                                </div>
                                <ThreeDotSvg />
                            </div>
                            <div className="post-image-container">
                                <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            </div>
                            <div className="post-bottom">
                                <div className="post-action">
                                    <HeartSvg />
                                    <CommentSvg />
                                    <ShareSvg />
                                    <BookmarkSvg />
                                </div>
                                <div className="likes">1000 likes</div>
                                <div className="post-description">
                                    <div className="username">user</div> this is description
                                </div>
                                <div className="post-comment">
                                    this is comment
                                </div>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-header">
                                <div className="user">
                                    <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                                    <div className="username">user</div>
                                </div>
                                <ThreeDotSvg />
                            </div>
                            <div className="post-image-container">
                                <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            </div>
                            <div className="post-bottom">
                                <div className="post-action">
                                    <HeartSvg />
                                    <CommentSvg />
                                    <ShareSvg />
                                    <BookmarkSvg />
                                </div>
                                <div className="likes">1000 likes</div>
                                <div className="post-description">
                                    <div className="username">user</div> this is description
                                </div>
                                <div className="post-comment">
                                    this is comment
                                </div>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-header">
                                <div className="user">
                                    <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                                    <div className="username">user</div>
                                </div>
                                <ThreeDotSvg />
                            </div>
                            <div className="post-image-container">
                                <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            </div>
                            <div className="post-bottom">
                                <div className="post-action">
                                    <HeartSvg />
                                    <CommentSvg />
                                    <ShareSvg />
                                    <BookmarkSvg />
                                </div>
                                <div className="likes">1000 likes</div>
                                <div className="post-description">
                                    <div className="username">user</div> this is description
                                </div>
                                <div className="post-comment">
                                    this is comment
                                </div>
                            </div>
                        </div>
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
                        <div className="suggestion">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="user">
                                <div className="username">user</div>
                                <div className="followed-by">Followed by someone</div>
                            </div>
                            <div className="follow-btn">follow</div>
                        </div>
                        <div className="suggestion">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="user">
                                <div className="username">user</div>
                                <div className="followed-by">Followed by someone</div>
                            </div>
                            <div className="follow-btn">follow</div>
                        </div>
                        <div className="suggestion">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="user">
                                <div className="username">user</div>
                                <div className="followed-by">Followed by someone</div>
                            </div>
                            <div className="follow-btn">follow</div>
                        </div>
                        <div className="suggestion">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="user">
                                <div className="username">user</div>
                                <div className="followed-by">Followed by someone</div>
                            </div>
                            <div className="follow-btn">follow</div>
                        </div>
                        <div className="suggestion">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="user">
                                <div className="username">user</div>
                                <div className="followed-by">Followed by someone</div>
                            </div>
                            <div className="follow-btn">follow</div>
                        </div>
                        <div className="suggestion">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="user">
                                <div className="username">user</div>
                                <div className="followed-by">Followed by someone</div>
                            </div>
                            <div className="follow-btn">follow</div>
                        </div>
                    </div>
                </div>
            </div>}
    </div>
}

export default Home