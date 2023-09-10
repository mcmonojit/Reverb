import "./PostCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdShare } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import Comments from "../comments/Comments";

// lazy load images
// fix image size issue

const PostCard = ({ postItem }) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const clickLikeHandler = () => {
    if (liked === false) {
      postItem.likes = postItem.likes + 1;
      setLiked(true);
    } else {
      postItem.likes--;
      setLiked(false);
    }
  };

  const showCommentsHandler = () => {
    if (showComments === false) {
      setShowComments(true);
    } else {
      setShowComments(false);
    }
  };

  const conciseLikes = (likes) => {
    // console.log(likes);
    let l = Math.floor(likes / 100);
    l = l / 10;
    if (likes > 50000) {
      l = Math.floor(l);
    }
    // console.log(l);
    return <span>{l}k likes</span>;
  };

  const showTime = (postTime) => {
    const time = new Date(postTime).getTime();
    console.log(time);
  };

  return (
    <div className="post-card">
      <div className="post-controls">
        <div className="profile-info">
          <img src={postItem.pofilePic} alt="profile-pic" />
          <div className="name-time">
            <Link to={`/profile/${postItem.userId}`}>
              <span className="profile-name">{postItem.userName}</span>
            </Link>
            {showTime(postItem.createdAt)}
            <span className="date-time">10:00 AM</span>
          </div>
        </div>
        <div className="option-menu">
          <CgMenuRightAlt />
        </div>
      </div>
      <div className="content">
        <p>{postItem.postText}</p>
        <div className="post-img">
          <img src={postItem.image} alt="post-img" />
        </div>
      </div>
      <div className="post-impression">
        {postItem.likes > 999 ? (
          conciseLikes(postItem.likes)
        ) : (
          <span className="post-likes">{postItem.likes} likes</span>
        )}

        {postItem.comments.length === 0 ? (
          <></>
        ) : (
          <>
            <BsDot />
            <span className="post-comments">
              {postItem.comments.length} comments
            </span>
          </>
        )}
      </div>
      <div className="interact">
        {liked === false ? (
          <AiOutlineHeart
            className="interact-icon"
            onClick={clickLikeHandler}
          />
        ) : (
          <AiTwotoneHeart
            className="interact-icon"
            onClick={clickLikeHandler}
            style={{ color: "var(--electricCrimson)" }}
          />
        )}

        <BiCommentDetail
          className="interact-icon"
          onClick={showCommentsHandler}
        />
        <MdShare className="interact-icon" />
      </div>
      <div
        className="comments-container"
        style={{ display: showComments === true ? "block" : "none" }}
      >
        <Comments commentsData={postItem.comments} />
      </div>
    </div>
  );
};

export default PostCard;
