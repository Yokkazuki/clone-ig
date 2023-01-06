type UserSuggestionProps = {
    username: string;
    thumbnail: string;
}

const UserSuggestion = ({ username, thumbnail }: UserSuggestionProps) => {
    return <div className="suggestion">
        <img src={thumbnail} />
        <div className="user">
            <div className="username">{username}</div>
            <div className="followed-by">Followed by someone</div>
        </div>
        <div className="follow-btn">follow</div>
    </div>
}

export default UserSuggestion