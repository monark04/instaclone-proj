import { useState, useEffect, useRef } from "react";
import Post from "../components/Post.jsx";
import { posts } from "../components/PostContent.jsx"; // Ensure this import exists and is correct

const mExplore = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPost = (index) => setSelectedPost(index);
  const closePost = () => setSelectedPost(null);

  const prevPost = (e) => {
    e.stopPropagation();
    setSelectedPost((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
  };

  const nextPost = (e) => {
    e.stopPropagation();
    setSelectedPost((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} openPost={openPost} />
        ))}
      </div>

      {!isMobile && selectedPost !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closePost}
        >
          <button
            onClick={prevPost}
            style={{
              position: "absolute",
              left: "10px",
              fontSize: "24px",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ◀
          </button>
          <div
            style={{
              background: "#fff",
              padding: "10px",
              borderRadius: "10px",
              maxWidth: "90vw",
            }}
          >
            <Post post={posts[selectedPost]} />
          </div>
          <button
            onClick={nextPost}
            style={{
              position: "absolute",
              right: "10px",
              fontSize: "24px",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default mExplore;
