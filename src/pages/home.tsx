import { useDispatch } from "react-redux"
import Login from "./login";

type HomeProps = {
    isLogin: boolean
}
const Home = (props: HomeProps) => {
    const dispatch = useDispatch();
    return <div>
        <div className="developing">
            Developing
        </div>
        {!props.isLogin ? <Login /> : <>logined</>}
    </div>
}

export default Home