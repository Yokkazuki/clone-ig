import { Route, Routes } from "react-router-dom"
import './App.css'
import { RootState } from "./store";
import { useSelector } from "react-redux";
import Home from "./pages/home"
import Navbar from "./pages/navbar"
import { IUserInfo } from "./store/user";

function App() {
  const userInfo = useSelector<RootState>((state) => state.user) as IUserInfo;
  const isLogin = userInfo.isLogin;
  
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/clone-ig/" element={<Home isLogin={isLogin} />} />
        </Routes>
      </div>
      {isLogin && <Navbar userIcon={userInfo.icon} />}
    </div>
  )
}

export default App
