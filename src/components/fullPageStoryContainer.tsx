import style from "./fullPageStoryContainer.module.css";
import { IStory } from "../store/stories";
import FullPageStory from "./fullPageStory";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../store";

const FullPageStoryContainer = () => {
  let stories = useSelector<RootState>(
    (state) => state.stories.stories
  ) as Array<IStory>;

  const [currentUserStoryIndex, setCurrentUserStoryIndex] = useState<number>(0);
  const maxStoryIndex = stories.length - 1;

  return (
    <div className={style.container}>
      <div className={style.storyList}>
        {stories?.map((userStories, i) => {
          const containerWidth = 700;
          const defaultPostion = containerWidth * i;
          const indexPostion = containerWidth * currentUserStoryIndex;
          const position = defaultPostion - indexPostion;
          return (
            <FullPageStory
              key={"userStories_" + i}
              userStories={userStories}
              index={i}
              isSelected={i === currentUserStoryIndex}
              setCurrentUserStoryIndex={setCurrentUserStoryIndex}
              currentUserStoryIndex={currentUserStoryIndex}
              maxStoryIndex={maxStoryIndex}
              positionX={position}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FullPageStoryContainer;
