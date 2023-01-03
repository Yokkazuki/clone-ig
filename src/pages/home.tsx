import { RootState } from "../store";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import Login from "./login";
import { userActions } from "../store/user"

const Home = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector<RootState>((state) => state.user.isLogin) as boolean;
    return <div>
        <div className="developing">
            Developing
        </div>
        {!isLogin ? <Login /> : <>logined</>}
    </div>
}

export default Home