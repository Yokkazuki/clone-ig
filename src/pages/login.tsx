import googlePlayIcon from "../images/pngs/googlePlay.png"
import mircrosoft from "../images/pngs/microsoft.png"
import p1 from "../images/pngs/loginR1.png"
import p2 from "../images/pngs/loginR2.png"
import p3 from "../images/pngs/loginR3.png"
import p4 from "../images/pngs/loginR4.png"
import loginStyle from "./login.module.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { userActions } from "../store/user"
import { storiesActions } from "../store/stories";

const Login = () => {

    const [isError, setError] = useState(false);
    const [userInput, setUserInput] = useState({ username: "", password: "" });
    const isValidUserInput = (userInput.username.length > 0 && userInput.password.length > 0);
    const dispatch = useDispatch();
    const login = () => {
        if (!isValidUserInput) return

        if (userInput.username !== "user" || userInput.password !== "user") {
            return setError(true);
        }
        dispatch(userActions.login());
        dispatch(storiesActions.fetchStories());
    }

    return <div className={loginStyle.login}>
        <div className={loginStyle.developing}>
            Developing
        </div>
        <div className={loginStyle.left}>
            <div className={loginStyle.imageContainer}>
                <img src={p1} className={loginStyle.image} />
                <img src={p2} className={loginStyle.image} />
                <img src={p3} className={loginStyle.image} />
                <img src={p4} className={loginStyle.image} />
            </div>
        </div>
        <div className={loginStyle.right}>

            <div className={loginStyle.form}>
                <div className={loginStyle.title}></div>
                <input type="text" placeholder="Phone number, username, or email" value={userInput.username}
                    onChange={(e) => {
                        setUserInput(prev => {
                            return { ...prev, username: e.target.value }
                        });
                    }}
                />
                <input type="password" placeholder="Password" value={userInput.password}
                    onChange={(e) => {
                        setUserInput(prev => {
                            return { ...prev, password: e.target.value }
                        });
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && isValidUserInput) {
                            login();
                        }
                    }} />
                <button className={loginStyle.loginBtn + (isValidUserInput ? " " + loginStyle.activeBtn : "")} onClick={login}>Log in</button>
                <div className={loginStyle.other}>
                    <div className={loginStyle.hr} />
                    <div className={loginStyle.or}>OR</div>
                    <div className={loginStyle.hr} />
                </div>
                <div className={loginStyle.facebook}>
                    <span className={loginStyle.facebookIcon}></span>
                    Log in with Facebook
                </div>
                {isError && <div className={loginStyle.errorMessage}>
                    <p>
                        Sorry, your password was incorrect. Please double-check your password.
                    </p>
                    <p>
                        ac&pw: user
                    </p>
                </div>}
                <a>
                    Forgot password?
                </a>
            </div>
            <div className={loginStyle.signUp}>
                Don't have an account? <span> Sign up</span>
            </div>
            <div className={loginStyle.appStore}>
                Get the app.
                <div className={loginStyle.store}>
                    <img src={googlePlayIcon} className={loginStyle.googlePlay} />
                    <img src={mircrosoft} className={loginStyle.microsoft} />
                </div>
            </div>
        </div>
    </div>
}

export default Login