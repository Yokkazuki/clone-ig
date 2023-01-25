import CreateSvg from "../images/svgs/create";
import ExploreSvg from "../images/svgs/explore";
import HomeSvg from "../images/svgs/home";
import InstagramTextSvg from "../images/svgs/igLogoText";
import InstagramLogoSvg from "../images/svgs/igLogo";
import MessagesSvg from "../images/svgs/message";
import MoreSvg from "../images/svgs/more";
import NotificationsSvg from "../images/svgs/notifications";
import ReelsSvg from "../images/svgs/reels";
import SearchSvg from "../images/svgs/search";
import style from "./navbar.module.css";

type NavbarProps = {
    userIcon: string;
}

const Navbar = (props: NavbarProps) => {
    return <div className={style.navbar}>
        <div className={style.linkField + " " + style.large}>
            <a className={style.logoField}>
                <div className={style.logoText} >
                    <InstagramTextSvg />
                </div>
                <div className={style.logo}>
                    <InstagramLogoSvg />
                </div>
            </a>
            <a className={style.link}>
                <HomeSvg />
                <div>Home</div>
            </a>
            <a className={style.link} >
                <SearchSvg />
                <div>Search</div>
            </a>
            <a className={style.link}>
                <ExploreSvg />
                <div>Explore</div>
            </a>
            <a className={style.link}>
                <ReelsSvg />
                <div>Reels</div>
            </a>
            <a className={style.link}>
                <MessagesSvg />
                <div>Messages</div>
            </a>
            <a className={style.link}>
                <NotificationsSvg />
                <div>Notifications</div>
            </a>
            <a className={style.link}>
                <CreateSvg />
                <div>Create</div>
            </a>
            <a className={style.link}>
                <img className={style.thumbnail} src={props.userIcon} />
                <div>Profile</div>
            </a>
        </div>
        <div className={style.link + " " + style.more}>
            <MoreSvg />
            <div>More</div>
        </div>

        <div className={style.linkField + " " + style.small}>
            {/* <div className={style.topNavbar}>
                <div className={style.logoText}>
                    <InstagramTextSvg />
                </div>
                <div>
                    <input type="text" placeholder="Search" />
                    <a className={style.link}>
                        <NotificationsSvg />
                    </a>
                </div>
            </div> */}
            <div className={style.bottomNavbar}>
                <a className={style.link}>
                    <HomeSvg />
                    <div>Home</div>
                </a>
                <a className={style.link}>
                    <ExploreSvg />
                    <div>Explore</div>
                </a>
                <a className={style.link}>
                    <ReelsSvg />
                    <div>Reels</div>
                </a>
                <a className={style.link}>
                    <CreateSvg />
                    <div>Create</div>
                </a>
                <a className={style.link}>
                    <MessagesSvg />
                    <div>Messages</div>
                </a>
                <a className={style.link}>
                    <img className={style.thumbnail} src={props.userIcon} />
                    <div>Profile</div>
                </a>
            </div>
        </div>

    </div>
}

export default Navbar