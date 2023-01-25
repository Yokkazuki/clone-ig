import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import { IUserInfo } from "./store/user";
import Story from "./pages/story";
import TopNavbar from "./pages/topNavbar";

function App() {
  const userInfo = useSelector<RootState>((state) => state.user) as IUserInfo;
  const isLogin = userInfo.isLogin;
  const location = useLocation();
  console.log(location);
  return (
    <div className="app">
      <div className="container">
        {isLogin && location.pathname === "/clone-ig/" && <TopNavbar />}
        <Routes>
          <Route path="/clone-ig/" element={<Home isLogin={isLogin} />} />
          <Route path="/clone-ig/stories" element={<Story />} />
        </Routes>
      </div>
      {isLogin && location.pathname !== "/clone-ig/stories" && (
        <Navbar userIcon={userInfo.icon} />
      )}
    </div>
  );
}

export default App;
