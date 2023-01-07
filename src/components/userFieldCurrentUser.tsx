import style from "./userFieldCurrentUser.module.css";

type UserFieldCurrentUserProps = {
    thumbnail: string;
    username: string;
    name: string;
}

const UserFieldCurrentUser = ({ thumbnail, username, name }: UserFieldCurrentUserProps) => {
    return <div className={style.currentUser}>
        <img src={thumbnail} />
        <div className={style.user}>
            <div className={style.username}>{username}</div>
            <div className={style.name}>{name}</div>
        </div>
        <div className={style.switchBtn}>Switch</div>
    </div>
}

export default UserFieldCurrentUser