import googlePlayIcon from "../images/pngs/googlePlay.png"
import mircrosoft from "../images/pngs/microsoft.png"
import p1 from "../images/pngs/loginR1.png"
import p2 from "../images/pngs/loginR2.png"
import p3 from "../images/pngs/loginR3.png"
import p4 from "../images/pngs/loginR4.png"
import "./login.css"
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

    return <div className="login">
        <div className="developing">
            Developing
        </div>
        <div className="login-left">
            <div className="login-image-container">
                <img src={p1} className="image-display" />
                <img src={p2} className="image-display" />
                <img src={p3} className="image-display" />
                <img src={p4} className="image-display" />
            </div>
        </div>
        <div className="login-right">

            <div className="login-form">
                <div className="title"></div>
                <input className="username" type="text" placeholder="Phone number, username, or email" value={userInput.username}
                    onChange={(e) => {
                        setUserInput(prev => {
                            return { ...prev, username: e.target.value }
                        });
                    }}
                />
                <input className="password" type="password" placeholder="Password" value={userInput.password}
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
                <button className={`login-btn${isValidUserInput ? " active-btn" : ""}`} onClick={login}>Log in</button>
                <div className="other">
                    <div className="hr" />
                    <div className="or">OR</div>
                    <div className="hr" />
                </div>
                <div className="facebook">
                    <span className="icon"></span>
                    Log in with Facebook
                </div>
                {isError && <div className="error-message">
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
            <div className="signUp">
                Don't have an account? <span> Sign up</span>
            </div>
            <div className="appStore">
                Get the app.
                <div className="store">
                    <img src={googlePlayIcon} className="googlePlay" />
                    <img src={mircrosoft} className="microsoft" />
                </div>
            </div>
        </div>
    </div>
}

export default Login