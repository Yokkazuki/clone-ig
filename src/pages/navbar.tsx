import CreateSvg from "../images/svgs/create";
import ExploreSvg from "../images/svgs/explore";
import HomeSvg from "../images/svgs/home";
import InstagramgLogo from "../images/svgs/igLogo";
import MessagesSvg from "../images/svgs/message";
import MoreSvg from "../images/svgs/more";
import NotificationsSvg from "../images/svgs/notifications";
import ReelsSvg from "../images/svgs/reels";
import SearchSvg from "../images/svgs/search";
import "./navbar.css";

type NavbarProps = {
    userIcon: string;
}

const Navbar = (props: NavbarProps) => {
    return <div className="navbar">
        <div className="link-field">
            <a className="logo">
                <InstagramgLogo />
            </a>
            <a className="link">
                <HomeSvg />
                <div className="link-title">Home</div>
            </a>
            <a className="link">
                <SearchSvg />
                <div className="link-title">Search</div>
            </a>
            <a className="link">
                <ExploreSvg />
                <div className="link-title">Explore</div>
            </a>
            <a className="link">
                <ReelsSvg />
                <div className="link-title">Reels</div>
            </a>
            <a className="link">
                <MessagesSvg />
                <div className="link-title">Messages</div>
            </a>
            <a className="link">
                <NotificationsSvg />
                <div className="link-title">Notifications</div>
            </a>
            <a className="link">
                <CreateSvg />
                <div className="link-title">Create</div>
            </a>
            <a className="link">
                <img className="thumbnail " src={props.userIcon} />
                <div className="link-title">Profile</div>
            </a>
        </div>
        <div className="link more">
            <MoreSvg />
            <div className="link-title">More</div>
        </div>

    </div>
}

export default Navbar