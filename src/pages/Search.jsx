import { useState, useEffect, useRef } from "react";
import Post from "../components/Post.jsx";
import { posts } from "../components/PostContent";

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

// Generate 300 users with mixed names
const users = Array.from({ length: 300 }, (_, i) => ({
  id: i + 1,
  name: names[i % names.length],  // Assigning a mixed name from the array
  username: `@${names[i % names.length].toLowerCase()}${i + 1}`, // Unique username
  avatar: `https://i.pravatar.cc/50?img=${(i % 70) + 1}`,
}));


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  useEffect(() => {
    if (isMobile && selectedPost !== null && scrollContainerRef.current) {
      const selectedElement = scrollContainerRef.current.children[selectedPost];
      if (selectedElement) {
        selectedElement.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [selectedPost]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      {/* Search Bar */}
      <input
  type="text"
  placeholder="Search users..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    width: "100%", // Adjust to fit container
    maxWidth: "calc(100% - 20px)", // Ensures it aligns with the grid
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box", // Prevents overflow
  }}
/>

      {/* Matched Users */}
      {searchTerm && (
        <div style={{ marginBottom: "20px" }}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "5px 0" }}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
                <div>
                  <strong>{user.username}</strong>
                  <p style={{ margin: 0, fontSize: "12px", color: "gray" }}>{user.name}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No users found</p>
          )}
        </div>
      )}

      {/* Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {posts.map((post, index) => (
          <div key={post.id} onClick={() => openPost(index)} style={{ cursor: "pointer" }}>
            <img src={post.image} alt={`Post ${post.id}`} style={{ width: "100%", display: "block" }} />
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

export default Search;
