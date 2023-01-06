
type StoryThumbnailProps = {
    createdByThumbnail: string;
    createdBy: string;
}

const StoryThumbnail = ({ createdByThumbnail, createdBy }: StoryThumbnailProps) => {
    return <div className="story">
        <img src={createdByThumbnail} />
        <div className="username">{createdBy}</div>
    </div>
}

export default StoryThumbnail