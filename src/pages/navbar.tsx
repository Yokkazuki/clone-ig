import CreateSvg from "../images/svgs/create";
import ExploreSvg from "../images/svgs/explore";
import HomeSvg from "../images/svgs/home";
import InstagramgLogo from "../images/svgs/igLogo";
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
        <div className={navStyle.linkField}>
            <a className={navStyle.logo}>
                <InstagramgLogo />
            </a>
            <a className={navStyle.link}>
                <HomeSvg />
                <div>Home</div>
            </a>
            <a className={navStyle.link}>
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

    </div>
}

export default Navbar