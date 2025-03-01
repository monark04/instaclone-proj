import React, { useState } from "react";
import "./Post.css";
import LikeIcon from "../assets/Like.svg";
import CommentIcon from "../assets/Comment.svg";
import ShareIcon from "../assets/Send.svg";
import SaveIcon from "../assets/Save.svg";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 500));

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="post">
      {/* Post Header */}
      <div className="post-header">
        <img src={post.user.avatar} alt="Profile" className="profile-pic" />
        <span className="username">{post.user.name}</span>
      </div>

      {/* Post Image */}
      <img src={post.image} alt="Post" className="post-image" />

      {/* Post Actions */}
      <div className="post-actions">
        <div className="left-icons">
          <img
            src={LikeIcon}
            alt="Like"
            className={`icon ${liked ? "liked" : ""}`}
            onClick={handleLike}
          />
          <img src={CommentIcon} alt="Comment" className="icon" />
          <img src={ShareIcon} alt="Share" className="icon" />
        </div>
        <img src={SaveIcon} alt="Save" className="icon right-icon" />
      </div>

      {/* Likes Count */}
      <p className="likes">{likes} likes</p>

      {/* Caption */}
      <p className="caption">
        <strong>{post.user.name}</strong> {post.caption}
      </p>
    </div>
  );
};

export default Post;
