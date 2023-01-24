import style from "./fullPageStoryContainer.module.css";
import { IStory, storiesActions } from "../store/stories";
import FullPageStory from "./fullPageStory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../store";

const FullPageStoryContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storiesActions.fetchStories());
  }, []);
  let stories = useSelector<RootState>(
    (state) => state.stories.stories
  ) as Array<IStory>;

  const [currentUserStoryIndex, setCurrentUserStoryIndex] = useState<number>(0);

  return (
    <div className={style.container}>
      <div className={style.storyList}>
        {stories?.map((userStories, i) => {
          const containerWidth = 700
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
              positionX={position}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FullPageStoryContainer;
