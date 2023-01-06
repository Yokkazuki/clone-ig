import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IUserInfo } from "../store/user";
import UserFieldCurrentUser from "./userFieldCurrentUser";
import UserSuggestionList from "./userSuggestionList";

const UserField = () => {

    const userInfo = useSelector<RootState>((state) => state.user) as IUserInfo;

    return <div className="user-field">
        <UserFieldCurrentUser thumbnail={userInfo.icon} username={userInfo.username} name={userInfo.name} />

        <div className="user-suggestions">Suggestions For You</div>
        <UserSuggestionList />
    </div >
}

export default UserField