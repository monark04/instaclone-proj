// PostContent.jsx - Generates dummy posts with comments, likes, and locations
import React from "react";
import { users } from "./User";


const getRandomLikes = () => Math.floor(Math.random() * 1000) + 50;
const locations = [
  "New York, USA", "Mumbai, India", "London, UK", "Sydney, Australia", "Paris, France",
  "Berlin, Germany", "Tokyo, Japan", "Dubai, UAE", "Toronto, Canada", "São Paulo, Brazil",
  "Cape Town, South Africa", "Singapore", "Los Angeles, USA", "Delhi, India", "Bangkok, Thailand",
  "Rome, Italy", "Barcelona, Spain", "Istanbul, Turkey", "Moscow, Russia", "Seoul, South Korea"
];

const getRandomLocation = () => locations[Math.floor(Math.random() * locations.length)];

const getRandomComments = (postId) => {
  const numComments = Math.floor(Math.random() * 4) + 5; // 5 to 8 comments
  return Array.from({ length: numComments }, () => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    return {
      user: randomUser.name,
      text: `This is a comment on post ${postId}`,
    };
  });
};

const posts = Array.from({ length: 600 }, (_, i) => {
    const user = users[i % users.length];
    return {
      id: `post${i + 1}`,
      user, // Store full user object
      image: `https://picsum.photos/500/500?random=${i + 1}`,
      likes: getRandomLikes(),
      location: getRandomLocation(),
      comments: getRandomComments(i + 1),
      caption: `Amazing view! #${i + 1}`,
    };
  });
  

  
const PostContent = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.avatar} alt={post.user} className="post-avatar" />
        <div className="post-info">
          <p className="post-user">{post.user}</p>
          <p className="post-location">{post.location}</p>
        </div>
      </div>
      <img src={post.image} alt="Post" className="post-image" />
      <p className="post-likes">{post.likes} likes</p>
      <div className="post-comments">
        {post.comments.map((comment, index) => (
          <p key={index} className="comment">
            <strong>{comment.user}</strong>: {comment.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export { PostContent, posts };
