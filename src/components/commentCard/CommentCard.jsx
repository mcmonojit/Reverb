import "./CommentCard.css";

const CommentCard = ({ commentItem }) => {
  return (
    <div className="comment-card">
      <img src={commentItem.profilePic} alt="" />
      <div className="comment-text">
        <div className="commentor-info">
          <span>{commentItem.userName}</span>
          <span>15 mins ago</span>
        </div>
        <p>{commentItem.commentText}</p>
      </div>
    </div>
  );
};
export default CommentCard;
