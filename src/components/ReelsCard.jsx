// import React from "react";
// import "./reels.css";
// import { FaHeart, FaCommentDots, FaShare, FaBookmark } from "react-icons/fa";
// import { users } from "./User";

// const ReelsCard = ({ videoUrl, index }) => {
//   const user = users[index % users.length];

//   return (
//     <div className="reel-container">
//       <video
//         className="reel-video"
//         src={videoUrl}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       <div className="reel-content">
//         {/* Right side icons */}
//         <div className="reel-icons">
//           <FaHeart className="icon" />
//           <FaCommentDots className="icon" />
//           <FaShare className="icon" />
//           <FaBookmark className="icon" />
//         </div>

//         {/* Bottom left user info */}
//         <div className="reel-user">
//           <img src={user.avatar} alt="user" className="reel-avatar" />
//           <div>
//             <p className="reel-username">@{user.id}</p>
//             <p className="reel-caption">{user.bio}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReelsCard;

import React from "react";
import "./reels.css";
import { FaHeart, FaCommentDots, FaShare, FaBookmark } from "react-icons/fa";

const ReelsCard = ({ videoUrl, user }) => { // Corrected props
  return (
    <div className="reel-container">
      <video
        className="reel-video"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="reel-content">
        {/* Right side icons */}
        <div className="reel-icons">
          <FaHeart className="icon" />
          <FaCommentDots className="icon" />
          <FaShare className="icon" />
          <FaBookmark className="icon" />
        </div>

        {/* Bottom left user info */}
        <div className="reel-user">
          <img src={user.avatar} alt="user" className="reel-avatar" />
          <div>
            <p className="reel-username">@{user.id}</p>
            <p className="reel-caption">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsCard;

