import BookmarkSvg from "../images/svgs/bookmark";
import CommentSvg from "../images/svgs/comment";
import HeartSvg from "../images/svgs/heart";
import ShareSvg from "../images/svgs/share";
import ThreeDotSvg from "../images/svgs/threeDot";
import { IComment } from "../store/posts";
import PostImageField from "./postImageField";
import style from "./post.module.css";
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
    return <div className={style.post}>
        <div className={style.header}>
            <div className={style.user}>
                <img src={createdByThumbnail} />
                <div className={style.username}>{createdBy}</div>
            </div>
            <ThreeDotSvg />
        </div>
        <PostImageField images={images} index={index} />
        <div className={style.bottom}>
            <div className={style.action}>
                <HeartSvg />
                <CommentSvg />
                <ShareSvg />
                <BookmarkSvg />
            </div>
            <div className={style.likes}>{likeCount} likes</div>
            <div className={style.description}>
                <div className={style.username}>{createdBy} </div> <div className={style.discriptionContent}>{discription}</div>
            </div>
            <div className={style.comment}>
                <div className={style.viewAllCommentBtn}>View all {comment.length} comments</div>
            </div>
            <div className={style.postTimeBefore}> {createdTimeBefore} ago</div>
        </div>
    </div>
}

export default Post