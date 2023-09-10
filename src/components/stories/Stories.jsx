import "./Stories.css";
import { storiesData } from "../../db/StoriesData";

const Stories = () => {
  return (
    <div className="stories">
      {storiesData.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="user-story" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
