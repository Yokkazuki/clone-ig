import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IUserInfo } from "../store/user";
import UserFieldCurrentUser from "./userFieldCurrentUser";
import UserSuggestionList from "./userSuggestionList";
import style from "./userField.module.css";
const UserField = () => {

    const userInfo = useSelector<RootState>((state) => state.user) as IUserInfo;

    return <div className={style.userField}>
        <UserFieldCurrentUser thumbnail={userInfo.icon} username={userInfo.username} name={userInfo.name} />

        <div className={style.suggestions}>Suggestions For You</div>
        <UserSuggestionList />
    </div >
}

export default UserField