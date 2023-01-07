import style from "./storyThumbnail.module.css";

type StoryThumbnailProps = {
    createdByThumbnail: string;
    createdBy: string;
}

const StoryThumbnail = ({ createdByThumbnail, createdBy }: StoryThumbnailProps) => {
    return <div className={style.story}>
        <img src={createdByThumbnail} />
        <div>{createdBy}</div>
    </div>
}

export default StoryThumbnail