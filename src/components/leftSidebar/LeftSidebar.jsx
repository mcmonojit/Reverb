import "./LeftSidebar.css";
import sampleAvatar from "../../assets/images/sampleAvatar.jpg";
import { ImCompass2 } from "react-icons/im";
import { BiBookmark } from "react-icons/bi";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="container">
        <div className="profile">
          <div className="user">
            <img src={sampleAvatar} alt="avatar" className="avatar" />
            <span className="name">Monojit Chakraborty</span>
            <span className="desc">Full Stack Developer</span>
          </div>
          <div className="impression-info">
            <div className="title">
              <span>Impression on your posts</span>
              <span className="highlight">32</span>
            </div>
            <div className="title">
              <span>Who viewed your profile</span>
              <span className="highlight">14</span>
            </div>
          </div>
          <div className="left-menu">
            <ImCompass2 />
            <span>Explore</span>
          </div>
          <div className="left-menu">
            <BiBookmark />
            <span>Saved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
