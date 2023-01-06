import BookmarkSvg from "../images/svgs/bookmark";
import CommentSvg from "../images/svgs/comment";
import HeartSvg from "../images/svgs/heart";
import ShareSvg from "../images/svgs/share";
import ThreeDotSvg from "../images/svgs/threeDot";
import { IComment } from "../store/posts";
import PostImageField from "./postImageField";

type PostProps = {
    createdBy: string;
    createdByThumbnail: string;
    images: Array<string>;
    index: number;
    likeCount: number;
    comment: Array<IComment>;
    createdTimeBefore: string;
    discription: string;
}

const Post = ({ createdBy, createdByThumbnail, images, likeCount, comment, createdTimeBefore, discription, index }: PostProps) => {
    return <div className="post">
        <div className="post-header">
            <div className="user">
                <img src={createdByThumbnail} />
                <div className="username">{createdBy}</div>
            </div>
            <ThreeDotSvg />
        </div>
        <PostImageField images={images} index={index} />
        <div className="post-bottom">
            <div className="post-action">
                <HeartSvg />
                <CommentSvg />
                <ShareSvg />
                <BookmarkSvg />
            </div>
            <div className="likes">{likeCount} likes</div>
            <div className="post-description">
                <div className="username">{createdBy} </div> <div className="description-content">{discription}</div>
            </div>
            <div className="post-comment">
                <div className="view-all-comment-btn">View all {comment.length} comments</div>
            </div>
            <div className="post-time-before"> {createdTimeBefore} ago</div>
        </div>
    </div>
}

export default Post