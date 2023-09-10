import "./Profile.css";
import { UseTitle } from "../../hook/UseTitle";
// import { ProfilesData } from "../../db/ProfilesData";
import cov1 from "../../assets/images/coverImg/cov1.jpg";
import p1 from "../../assets/images/profileImg/p1.jpg";

const Profile = () => {
  const titleString = ` Profile | Reverb `;
  UseTitle(titleString);
  return (
    <div className="profile-section">
      {/* {ProfilesData.map((profileitem) => { */}
      <div className="cover-img">
        <img src={cov1} alt="cover-img" />
      </div>
      <div className="profile-img">
        <img src={p1} alt="profile-img" />
      </div>
      {/* })} */}
    </div>
  );
};
export default Profile;
