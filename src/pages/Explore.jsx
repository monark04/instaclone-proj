import { useState, useEffect, useRef } from "react";
import Post from "../components/Post.jsx";
import { posts } from "../components/Feed.jsx";

const Explore = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollContainerRef = useRef(null);

  // Handle resizing to switch between mobile and desktop behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPost = (index) => {
    setSelectedPost(index);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  const prevPost = (e) => {
    e.stopPropagation();
    setSelectedPost((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
  };

  const nextPost = (e) => {
    e.stopPropagation();
    setSelectedPost((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
  };

  // Ensure scroll feed starts at selected post AND allows full scrolling
  useEffect(() => {
    if (isMobile && selectedPost !== null && scrollContainerRef.current) {
      const selectedElement = scrollContainerRef.current.children[selectedPost];
      if (selectedElement) {
        selectedElement.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [selectedPost]);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      {/* Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {posts.map((post, index) => (
          <div
            key={post.id}
            onClick={() => openPost(index)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={post.image}
              alt={`Post ${post.id}`}
              style={{ width: "100%", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* Desktop Popup */}
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

      {/* Mobile Scroll Feed (FIXED NAVBARS + FULL SCROLL) */}
      {isMobile && selectedPost !== null && (
        <div
          style={{
            position: "fixed",
            top: "60px", // Keeps space for top navbar
            bottom: "60px", // Keeps space for bottom navbar
            left: 0,
            width: "100vw",
            height: "calc(100vh - 110px)", // Adjusted height to not overlap navbars
            background: "#FFFFFF",
            overflowY: "scroll",
            zIndex: 1000,
            scrollBehavior: "smooth",
          }}
          ref={scrollContainerRef}
        >
          {posts.map((post) => (
            <div key={post.id} style={{ padding: "10px 0" }}>
              <Post post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
