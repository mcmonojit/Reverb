import { UseTitle } from "../../hook/UseTitle";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";

const Home = () => {
  UseTitle(" REVERB | Home ");
  return (
    <div>
      <div>
        <Stories />
      </div>

      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Home;
