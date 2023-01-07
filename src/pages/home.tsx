import homeStyle from "./home.module.css";
import Login from "./login";
import StoriesField from "../components/storiesField";
import UserField from "../components/userField";
import PostField from "../components/postField";

type HomeProps = {
    isLogin: boolean
}

const Home = (props: HomeProps) => {

    return <div>
        {!props.isLogin ? <Login /> :
            <div className={homeStyle.home}>
                <div className={homeStyle.main}>
                    <StoriesField />
                    <PostField />
                </div>
                <UserField />
            </div>}
    </div>
}

export default Home