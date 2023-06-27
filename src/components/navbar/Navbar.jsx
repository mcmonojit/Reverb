import "../navbar/Navbar.css";
import BrandLogo from "../brandLogo/BrandLogo";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { MdWork } from "react-icons/md";
// import { BiSolidNetworkChart } from "react-icons/bi";
// import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section>
        <BrandLogo />
      </section>
      <section className="dock">
        <div className="myConnections">
          <MdGroup />
        </div>
        <div className="jobInfo">
          <MdWork />
        </div>
        <div className="notification">
          <IoMdNotifications />
        </div>

        <div className="accountInfo">
          <FaUser />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
