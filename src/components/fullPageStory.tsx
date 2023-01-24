import { useState } from "react";
import { IStory } from "../store/stories";
import style from "./fullPageStory.module.css";

type FullPageStoryProps = {
  userStories: IStory;
  isSelected: boolean;
  index: number;
  positionX: number;
  setCurrentUserStoryIndex: React.Dispatch<React.SetStateAction<number>>;
};

const FullPageStory = ({
  userStories,
  isSelected,
  index,
  positionX,
  setCurrentUserStoryIndex,
}: FullPageStoryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const movePrevStory = () => {
    if (currentImageIndex !== 0) {
      setCurrentImageIndex((prev) => prev - 1);
    } else {
      setCurrentUserStoryIndex((prev) => prev - 1);
    }
  };
  const moveNextStory = () => {
    if (currentImageIndex !== userStories.image.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    } else {
      setCurrentUserStoryIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      className={
        isSelected ? style.container + " " + style.active : style.container
      }
      style={{ transform: `translateX(${positionX}px)` }}
    >
      <div
        className={isSelected ? style.card + " " + style.active : style.card}
        onClick={() => setCurrentUserStoryIndex(index)}
      >
        <img
          className={style.image}
          src={userStories.image[currentImageIndex]}
        />
        <div className={style.content}>
          {isSelected && (
            <div className={style.barGroup}>
              {userStories.image?.map((bar, i) => {
                return (
                  <div
                    className={style.bar}
                    key={"user_" + userStories.createdBy + "bar_" + i}
                  />
                );
              })}
            </div>
          )}

          <div className={style.storiesInfo}>
            <img src={userStories.createdByThumbnail} />
            <div>{userStories.createdBy}</div>
            <div>{userStories.createdTimeBefore}</div>
          </div>
        </div>
      </div>

      {isSelected && (
        <div className={style.arrowLeft} onClick={movePrevStory} />
      )}
      {isSelected && (
        <div className={style.arrowRight} onClick={moveNextStory} />
      )}
    </div>
  );
};

export default FullPageStory;
