import gp from "../images/googlePlay.png"
import m from "../images/microsoft.png"
import p1 from "../images/loginR1.png"
import p2 from "../images/loginR2.png"
import p3 from "../images/loginR3.png"
import p4 from "../images/loginR4.png"

import "./login.css"
const Login = () => {
    return <div className="login">
        <div className="login-left">
            <div className="login-image-container">
                <img src={p4} className="image-display"/>
            </div>
        </div>
        <div className="login-right">

            <div className="login-form">
                <div className="title"></div>
                <input className="username" type="text" placeholder="Phone number, username, or email" />
                <input className="password" type="text" placeholder="Password" />
                <button className="login-btn">Log in</button>
                <div className="other">
                    <div className="hr" />
                    <div className="or">OR</div>
                    <div className="hr" />
                </div>
                <div className="facebook">
                    <span className="icon"></span>
                    Log in with Facebook
                </div>
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
                    <img src={gp} className="googlePlay"/>
                    <img src={m}className="microsoft"/>
                </div>
            </div>
        </div>
    </div>
}

export default Login