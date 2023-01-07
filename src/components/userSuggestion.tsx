import style from "./userSuggestion.module.css";

type UserSuggestionProps = {
    username: string;
    thumbnail: string;
}

const UserSuggestion = ({ username, thumbnail }: UserSuggestionProps) => {
    return <div className={style.suggestion}>
        <img src={thumbnail} />
        <div className={style.user}>
            <div className={style.username}>{username}</div>
            <div className={style.followedBy}>Followed by someone</div>
        </div>
        <div className={style.followBtn}>follow</div>
    </div>
}

export default UserSuggestion