import "./Navbar.css";
import BrandLogo from "../brandLogo/BrandLogo";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
// import { IoNotificationsOutline } from "react-icons/io5";
import sampleAvatar from "../../assets/images/sampleAvatar.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="leftSection">
        <BrandLogo />
        <div className="searchbar">
          <GoSearch className="searchIcon" />
          <input type="text" />
          <MdClear className="searchIcon" />
        </div>
      </section>
      <section className="dock">
        <BiNetworkChart className="dockIcons" />
        <MdWork className="dockIcons" />
        <IoMdNotifications className="dockIcons" />
        <BsFillPersonFill className="dockIcons" />
        <div className="user">
          <img src={sampleAvatar} alt="avatar" />
          {/* <span>Monojit</span> */}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
