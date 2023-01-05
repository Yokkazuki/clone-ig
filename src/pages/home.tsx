import { useDispatch } from "react-redux"
import BookmarkSvg from "../images/svgs/bookmark";
import CommentSvg from "../images/svgs/comment";
import HeartSvg from "../images/svgs/heart";
import ShareSvg from "../images/svgs/share";
import ThreeDotSvg from "../images/svgs/threeDot";
import "./home.css"
import Login from "./login";

type HomeProps = {
    isLogin: boolean
}
const Home = (props: HomeProps) => {
    const dispatch = useDispatch();
    return <div>
        {/* <div className="developing">
            Developing
        </div> */}
        {!props.isLogin ? <Login /> :
            <div className="home">
                <div className="main-field">
                    <div className="stories-field">
                        <div className="story">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="username">user</div>
                        </div>
                        <div className="story">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="username">user</div>
                        </div>
                        <div className="story">
                            <img src="https://static.displate.com/857x1200/displate/2022-07-07/fb201c5aef2a8558a1eec3a095be6d49_1c1023275f02c2ee7bc146309a812775.jpg" />
                            <div className="username">user</div>
                        </div>
                    </div>

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