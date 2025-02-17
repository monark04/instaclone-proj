import { FaHeart, FaRegHeart, FaRegComment, FaPaperPlane, FaBookmark, FaRegBookmark, FaEllipsisH } from "react-icons/fa";
import { useState } from "react";

const Post = ({ image, user, caption, likes, time }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="post-container">
      {/* Header: User Info */}
      <div className="post-header">
        <div className="user-info">
          <img src={user.avatar} alt={user.name} />
          <span className="font-semibold text-sm">{user.name}</span>
        </div>
        <FaEllipsisH className="text-gray-600 cursor-pointer" />
      </div>

      {/* Post Image */}
      <img className="post-image" src={image} alt="Post" />

      {/* Action Buttons */}
      <div className="post-actions">
        <div className="like-comment-share">
          <button onClick={() => setLiked(!liked)}>
            {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
          <FaRegComment />
          <FaPaperPlane />
        </div>
        <button onClick={() => setSaved(!saved)}>
          {saved ? <FaBookmark className="text-black" /> : <FaRegBookmark />}
        </button>
      </div>

      {/* Like Count & Caption */}
      <div className="post-caption">
        <p className="font-semibold">{liked ? likes + 1 : likes} likes</p>
        <p><span className="font-semibold">{user.name}</span> {caption}</p>
      </div>

      {/* Timestamp */}
      <p className="post-time">{time}</p>
    </div>
  );
};

export default Post;
