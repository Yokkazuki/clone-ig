import { useNavigate } from "react-router-dom";
import style from "./storyThumbnail.module.css";

type StoryThumbnailProps = {
  createdByThumbnail: string;
  createdBy: string;
};

const StoryThumbnail = ({
  createdByThumbnail,
  createdBy,
}: StoryThumbnailProps) => {
  const navigate = useNavigate();
  return (
    <div className={style.story} onClick={() => navigate("/clone-ig/stories")}>
      <img src={createdByThumbnail} />
      <div>{createdBy}</div>
    </div>
  );
};

export default StoryThumbnail;
