import "./Comments.css";
import { BiSend } from "react-icons/bi";
import CommentCard from "../commentCard/CommentCard";
import sampleAvatar from "../../assets/images/sampleAvatar.jpg";

const Comments = ({ commentsData }) => {
  return (
    <div className="comments-section">
      <div className="comment-input">
        <img src={sampleAvatar} alt="user-avatar" />
        <div className="comment-input-box">
          <input
            type="text"
            placeholder={
              commentsData.length === 0
                ? "Be the first person to comment on this post!"
                : "Add a comment..."
            }
          />
        </div>
        <div>
          <BiSend className="comment-input-icon" />
        </div>
      </div>
      {commentsData.map((commentitem) => {
        return (
          <CommentCard commentItem={commentitem} key={commentitem.commentId} />
        );
      })}
    </div>
  );
};

export default Comments;
