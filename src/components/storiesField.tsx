import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { storiesActions, IStory } from "../store/stories";
import StoryThumbnail from "./storyThumbnail";
import style from "./storiesField.module.css";
import { useQuery } from "@tanstack/react-query";
import { getStories } from "../api/story";

const StoriesField = () => {
  const dispatch = useDispatch();
  const getStoriesQuery = useQuery({
    queryKey: ["stories"],
    queryFn: getStories,
  });

  useEffect(() => {
    if (getStoriesQuery.isError) {
      dispatch(storiesActions.fetchStories(null));
    }
    if (getStoriesQuery.isSuccess) {
      dispatch(storiesActions.fetchStories(getStoriesQuery.data.stories));
    }
  }, [getStoriesQuery.isFetched]);
  let stories = useSelector<RootState>(
    (state) => state.stories.stories
  ) as Array<IStory>;
  const [isDisplayArrow, setIsDisplayArrow] = useState({
    leftArrow: false,
    rightArrow: true,
  });
  const getStoriesFieldMaxWidth = () => {
    const storiesContainer = document.getElementsByClassName(
      style.container
    )[0];
    return storiesContainer.scrollWidth - storiesContainer.clientWidth;
  };

  const storiesScrollLeft = () => {
    const storiesContainer = document.getElementsByClassName(
      style.container
    )[0];
    storiesContainer.scrollLeft -= 200;
    handleIsDisplayStoriesArrow((storiesContainer.scrollLeft -= 200));
  };
  const storiesScrollRight = () => {
    const storiesContainer = document.getElementsByClassName(
      style.container
    )[0];
    storiesContainer.scrollLeft += 200;
    handleIsDisplayStoriesArrow((storiesContainer.scrollLeft += 200));
  };

  const handleIsDisplayStoriesArrow = (current: number) => {
    if (current <= 0) {
      setIsDisplayArrow({ leftArrow: false, rightArrow: true });
    } else if (current >= getStoriesFieldMaxWidth()) {
      setIsDisplayArrow({ leftArrow: true, rightArrow: false });
    } else if (current !== 0 && current !== getStoriesFieldMaxWidth()) {
      setIsDisplayArrow({ leftArrow: true, rightArrow: true });
    }
  };

  return (
    <div className={style.storiesField}>
      <div className={style.container}>
        {getStoriesQuery.isLoading && <div>Loading stories</div>}
        {stories?.map((story, i) => {
          return (
            <StoryThumbnail
              createdBy={story.createdBy}
              createdByThumbnail={story.createdByThumbnail}
              key={"StoryThumbnail_" + i}
            />
          );
        })}
      </div>
      {isDisplayArrow.leftArrow && (
        <div className={style.arrowLeft} onClick={storiesScrollLeft} />
      )}
      {isDisplayArrow.rightArrow && (
        <div className={style.arrowRight} onClick={storiesScrollRight} />
      )}
    </div>
  );
};

export default StoriesField;
