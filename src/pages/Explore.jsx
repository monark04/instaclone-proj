import { useState } from "react";
import Modal from "react-modal";

// Fix for react-modal
Modal.setAppElement("#root");

// Generate 60 posts
const posts = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  image: `https://picsum.photos/400/400?random=${i + 1}`,
  user: {
    name: `User ${i + 1}`,
    avatar: `https://i.pravatar.cc/50?img=${(i % 70) + 1}`
  },
  caption: `Amazing post #${i + 1} ✨`
}));

const Explore = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Grid Layout */}
      <div className="grid-container">
        {posts.map((post) => (
          <img
            key={post.id}
            src={post.image}
            alt="Explore Post"
            className="cursor-pointer"
            onClick={() => setSelectedPost(post)} // Trigger modal open on click
          />
        ))}
      </div>

      {/* Modal for Single Post */}
      {selectedPost && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Image Section */}
            <div className="modal-image">
              <img src={selectedPost.image} alt="Post" />
            </div>

            {/* Details Section */}
            <div className="modal-details">
              <div className="modal-user">
                <img className="w-10 h-10 rounded-full" src={selectedPost.user.avatar} alt={selectedPost.user.name} />
                <span className="font-semibold">{selectedPost.user.name}</span>
              </div>
              <p className="mt-3">{selectedPost.caption}</p>
              <button
                className="close-btn"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
