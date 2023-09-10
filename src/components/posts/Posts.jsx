import { PostsData } from "../../db/PostsData";

import PostCard from "../postCard/PostCard";

const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((postitem) => {
        return <PostCard postItem={postitem} key={postitem.id} />;
      })}
    </div>
  );
};
export default Posts;
