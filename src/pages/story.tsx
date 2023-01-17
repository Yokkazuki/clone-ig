import { useNavigate } from "react-router-dom";
import FullPageStoryContainer from "../components/fullPageStoryContainer";
import CloseSvg from "../images/svgs/close";
import InstagramTextSvg from "../images/svgs/igLogoText";
import style from "./story.module.css";

const Story = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.header}>
        <InstagramTextSvg />
        <div onClick={() => navigate("/clone-ig/")}>
          <CloseSvg />
        </div>
      </div>
      <FullPageStoryContainer />
    </div>
  );
};

export default Story;
