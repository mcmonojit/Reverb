import "../brandLogo/BrandLogo.css";
import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <div className="brandLogo">
      <Link className="brandLink" to="/">
        <h1>REVERB</h1>
      </Link>
    </div>
  );
};

export default BrandLogo;
