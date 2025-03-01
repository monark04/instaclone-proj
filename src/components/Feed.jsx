import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./Post.css";

const names = [
    // 25 English Names
    "Alex", "Jordan", "Taylor", "Morgan", "Charlie", "Sam", "Casey", "Riley", "Skyler", "Quinn",
    "Jamie", "Drew", "Cameron", "Dakota", "Reese", "Avery", "Jesse", "Harley", "Peyton", "Blake",
    "Logan", "Hunter", "Mason", "Finn", "Zane",
    // 25 Indian Names
    "Aarav", "Ishaan", "Kabir", "Rohan", "Aditya", "Rahul", "Vikram", "Sanjay", "Kunal", "Arjun",
    "Neha", "Priya", "Ananya", "Sanya", "Kavya", "Pooja", "Sneha", "Riya", "Meera", "Tanvi",
    "Dev", "Varun", "Raghav", "Yash", "Aniket"
  ];
  
  // Generate 300 posts with random names
  const initialPosts = Array.from({ length: 300 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/400/400?random=${i + 1}`,
    user: {
      name: names[i % names.length],  // Assigning a random name from the array
      avatar: `https://i.pravatar.cc/50?img=${(i % 70) + 1}`,
    },
    caption: `Amazing post #${i + 1} ✨`,
  }));
  

// ✅ Now exported so Explore.jsx can use it
export const posts = initialPosts;

const Feed = () => {
  const [visiblePosts, setVisiblePosts] = useState(10);

  // Load more posts on scroll
  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500
      ) {
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
