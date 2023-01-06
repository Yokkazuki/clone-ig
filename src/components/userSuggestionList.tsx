import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IUserSuggestion, userSuggestionsActions } from "../store/userSuggestion";
import UserSuggestion from "./userSuggestion";

const UserSuggestionList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userSuggestionsActions.fetchUserSuggestion());
    }, []);
    let userSuggestions = useSelector<RootState>((state) => state.userSuggestions.userSuggestions) as Array<IUserSuggestion>;

    return <div className="suggestions-list">
        {userSuggestions?.map((userSuggestion, i) => {
            return <UserSuggestion username={userSuggestion.username} thumbnail={userSuggestion.thumbnail} key={"UserSuggestion_" + i} />
        })}

    </div>



}
export default UserSuggestionList