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
import navStyle from "./navbar.module.css";

type NavbarProps = {
    userIcon: string;
}

const Navbar = (props: NavbarProps) => {
    return <div className={navStyle.navbar}>
        <div className={navStyle.linkField + " " + navStyle.large}>
            <a className={navStyle.logoField}>
                <div className={navStyle.logoText} >
                    <InstagramTextSvg />
                </div>
                <div className={navStyle.logo}>
                    <InstagramLogoSvg />
                </div>
            </a>
            <a className={navStyle.link}>
                <HomeSvg />
                <div>Home</div>
            </a>
            <a className={navStyle.link} >
                <SearchSvg />
                <div>Search</div>
            </a>
            <a className={navStyle.link}>
                <ExploreSvg />
                <div>Explore</div>
            </a>
            <a className={navStyle.link}>
                <ReelsSvg />
                <div>Reels</div>
            </a>
            <a className={navStyle.link}>
                <MessagesSvg />
                <div>Messages</div>
            </a>
            <a className={navStyle.link}>
                <NotificationsSvg />
                <div>Notifications</div>
            </a>
            <a className={navStyle.link}>
                <CreateSvg />
                <div>Create</div>
            </a>
            <a className={navStyle.link}>
                <img className={navStyle.thumbnail} src={props.userIcon} />
                <div>Profile</div>
            </a>
        </div>
        <div className={navStyle.link + " " + navStyle.more}>
            <MoreSvg />
            <div>More</div>
        </div>

        <div className={navStyle.linkField + " " + navStyle.small}>
            <div className={navStyle.topNavbar}>
                <div className={navStyle.logoText}>
                    <InstagramTextSvg />
                </div>
                <div>
                    <input type="text" placeholder="Search" />
                    <a className={navStyle.link}>
                        <NotificationsSvg />
                    </a>
                </div>
            </div>
            <div className={navStyle.bottomNavbar}>
                <a className={navStyle.link}>
                    <HomeSvg />
                    <div>Home</div>
                </a>
                <a className={navStyle.link}>
                    <ExploreSvg />
                    <div>Explore</div>
                </a>
                <a className={navStyle.link}>
                    <ReelsSvg />
                    <div>Reels</div>
                </a>
                <a className={navStyle.link}>
                    <CreateSvg />
                    <div>Create</div>
                </a>
                <a className={navStyle.link}>
                    <MessagesSvg />
                    <div>Messages</div>
                </a>
                <a className={navStyle.link}>
                    <img className={navStyle.thumbnail} src={props.userIcon} />
                    <div>Profile</div>
                </a>
            </div>
        </div>

    </div>
}

export default Navbar