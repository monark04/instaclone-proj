// import React from 'react';
// import ReelsCard from '../components/ReelsCard';

// const Reels = () => {
//   return (
//     <div className="reels-scroll-wrapper">
//       {/* Render multiple ReelsCard components */}
//       {[...Array(10)].map((_, i) => (
//         <ReelsCard key={i} index={i} />
//       ))}
//     </div>
//   );
// };

// export default Reels;

import React from "react";
import ReelContent from "../components/ReelContent";
import "../components/reels.css"; // Ensure styles are loaded

const Reels = () => {
  return (
    <div className="reels-scroll-wrapper">
      <ReelContent />
    </div>
  );
};

export default Reels;










