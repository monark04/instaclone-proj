import React, { useState, useEffect } from "react";
import Post from "./Post";
import { posts } from "./PostContent";
import "./Post.css";

const Feed = () => {
  const [visiblePosts, setVisiblePosts] = useState(10);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMorePosts();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="feed">
      {posts.slice(0, visiblePosts).map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
