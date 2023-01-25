import InstagramTextSvg from "../images/svgs/igLogoText";
import NotificationsSvg from "../images/svgs/notifications";
import style from "./topNavbar.module.css";

const TopNavbar = () => {
  return (
      <div className={style.topNavbar}>
        <div className={style.logoText}>
          <InstagramTextSvg />
        </div>
        <div>
          <input type="text" placeholder="Search" />
          <a className={style.link}>
            <NotificationsSvg />
          </a>
        </div>
      </div>
  );
};

export default TopNavbar;
