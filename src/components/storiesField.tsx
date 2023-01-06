import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { storiesActions, IStory } from "../store/stories";
import StoryThumbnail from "./storyThumbnail";


const StoriesField = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(storiesActions.fetchStories());
    }, []);
    let stories = useSelector<RootState>((state) => state.stories.stories) as Array<IStory>;
    const [isDisplayArrow, setIsDisplayArrow] = useState({ leftArrow: false, rightArrow: true });
    const getStoriesFieldMaxWidth = () => {
        const storiesContainer = document.getElementsByClassName("stories-container")[0];
        return storiesContainer.scrollWidth - storiesContainer.clientWidth;
    }

    const storiesScrollLeft = () => {
        const storiesContainer =
            document.getElementsByClassName("stories-container")[0];
        storiesContainer.scrollLeft -= 200;
        handleIsDisplayStoriesArrow(storiesContainer.scrollLeft -= 200);
    }
    const storiesScrollRight = () => {
        const storiesContainer =
            document.getElementsByClassName("stories-container")[0];
        storiesContainer.scrollLeft += 200;
        handleIsDisplayStoriesArrow(storiesContainer.scrollLeft += 200);
    }

    const handleIsDisplayStoriesArrow = (current: number) => {
        if (current <= 0) {
            setIsDisplayArrow({ leftArrow: false, rightArrow: true })
        } else if (current >= getStoriesFieldMaxWidth()) {
            setIsDisplayArrow({ leftArrow: true, rightArrow: false })
        } else if (current !== 0 && current !== getStoriesFieldMaxWidth()) {
            setIsDisplayArrow({ leftArrow: true, rightArrow: true })
        }
    }

    return <div className="stories-field">
        <div className="stories-container">
            {stories?.map((story, i) => {
                return <StoryThumbnail createdBy={story.createdBy} createdByThumbnail={story.createdByThumbnail} key={"StoryThumbnail_" + i} />
            })}
        </div>
        {isDisplayArrow.leftArrow && <div className="stories-arrow-left" onClick={storiesScrollLeft} />}
        {isDisplayArrow.rightArrow && <div className="stories-arrow-right" onClick={storiesScrollRight} />}
    </div>
}

export default StoriesField