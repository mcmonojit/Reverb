import "./RightSidebar.css";
import { BiSort } from "react-icons/bi";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="container">
        <div>
          <p>Create new post</p>
        </div>
        <div className="sort-controls">
          <BiSort />
          <span>Sort</span>
        </div>
        <div className="trending">
          <p>Trending section</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
            molestias.
          </p>
        </div>
        <div>
          <p>Follow</p>
          <p>Person 1</p>
          <p>Person 2</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
