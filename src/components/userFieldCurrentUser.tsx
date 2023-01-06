

type UserFieldCurrentUserProps = {
    thumbnail: string;
    username: string;
    name: string;
}

const UserFieldCurrentUser = ({ thumbnail, username, name }: UserFieldCurrentUserProps) => {
    return <div className="current-user">
        <img src={thumbnail} />
        <div className="user">
            <div className="username">{username}</div>
            <div className="name">{name}</div>
        </div>
        <div className="switch-btn">Switch</div>
    </div>
}

export default UserFieldCurrentUser