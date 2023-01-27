import { useEffect, useState } from "react";
import { IStory } from "../store/stories";
import style from "./fullPageStory.module.css";

type FullPageStoryProps = {
  userStories: IStory;
  isSelected: boolean;
  index: number;
  positionX: number;
  currentUserStoryIndex: number;
  maxStoryIndex: number;
  setCurrentUserStoryIndex: React.Dispatch<React.SetStateAction<number>>;
};

const FullPageStory = ({
  userStories,
  isSelected,
  index,
  positionX,
  currentUserStoryIndex,
  maxStoryIndex,
  setCurrentUserStoryIndex,
}: FullPageStoryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const maxImageIndex = userStories.image.length - 1;
  const movePrevStory = () => {
    if (currentImageIndex !== 0) {
      setCurrentImageIndex((prev) => prev - 1);
    } else {
      setCurrentUserStoryIndex((prev) => prev - 1);
    }
  };
  const moveNextStory = () => {
    if (currentImageIndex !== maxImageIndex) {
      setCurrentImageIndex((prev) => prev + 1);
    } else {
      setCurrentUserStoryIndex((prev) => prev + 1);
    }
  };

  let timer: any;
  let nextStoryTimer: any;

  const updateImage = () => {
    console.log(
      "currentImageIndex: ",
      currentImageIndex,
      "maxImageIndex: ",
      maxImageIndex
    );
    timer = setInterval(moveNextStory, 5000);

    if (currentImageIndex === maxImageIndex) {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    if (isSelected && currentImageIndex === maxImageIndex) {
      nextStoryTimer = setTimeout(
        () => setCurrentUserStoryIndex((prev) => prev + 1),
        5000
      );
      return () => clearTimeout(nextStoryTimer);
    }
  }, [currentImageIndex, isSelected]);

  useEffect(() => {
    if (isSelected) updateImage();

    return () => clearInterval(timer);
  }, [isSelected, currentImageIndex]);

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
        {isSelected && (
          <>
            <div className={style.darkBlockTop} />
            <div className={style.darkBlockBottom} />
          </>
        )}
        <div className={style.content}>
          {isSelected && (
            <div className={style.barGroup}>
              {userStories.image?.map((bar, i) => {
                return (
                  <div
                    className={
                      currentImageIndex === i
                        ? style.bar + " " + style.currentBar
                        : i < currentImageIndex
                        ? style.bar + " " + style.prevBar
                        : style.bar
                    }
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
        <>
          {(currentUserStoryIndex !== 0 || currentImageIndex !== 0) && (
            <div className={style.arrowLeft} onClick={movePrevStory} />
          )}
          {(currentUserStoryIndex !== maxStoryIndex ||
            currentImageIndex !== maxImageIndex) && (
            <div className={style.arrowRight} onClick={moveNextStory} />
          )}
        </>
      )}
    </div>
  );
};

export default FullPageStory;
