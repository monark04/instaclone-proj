import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const posts = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/id/${i + 10}/600/600`);
  const saved = Array.from({ length: 4 }, (_, i) => `https://picsum.photos/id/${i + 30}/600/600`);
  const tagged = Array.from({ length: 3 }, (_, i) => `https://picsum.photos/id/${i + 40}/600/600`);

  const renderImages = (images) =>
    images.map((url, index) => (
      <img key={index} src={url} alt={`post-${index}`} className="profile-post" />
    ));

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <img src="https://picsum.photos/id/1005/150" alt="avatar" className="profile-avatar" />
        <div className="profile-info">
          <h2>@spensor.78</h2>
          <div className="profile-stats">
            <span><strong>{posts.length}</strong> posts</span>
            <span><strong>482</strong> followers</span>
            <span><strong>317</strong> following</span>
          </div>
          <p className="profile-bio">Sharing moments of life.</p>
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>

      <div className="profile-tabs">
        <button onClick={() => setActiveTab("posts")} className={activeTab === "posts" ? "active" : ""}>Posts</button>
        <button onClick={() => setActiveTab("saved")} className={activeTab === "saved" ? "active" : ""}>Saved</button>
        <button onClick={() => setActiveTab("tagged")} className={activeTab === "tagged" ? "active" : ""}>Tagged</button>
      </div>

      <div className="profile-grid">
        {activeTab === "posts" && renderImages(posts)}
        {activeTab === "saved" && renderImages(saved)}
        {activeTab === "tagged" && renderImages(tagged)}
      </div>

      <style>{`
        .profile-wrapper {
          max-width: 935px;
          margin: auto;
          padding: 16px;
          font-family: Arial, sans-serif;
        }

        .profile-header {
          display: flex;
          align-items: flex-start;
          gap: 30px;
          flex-wrap: wrap;
        }

        .profile-avatar {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
        }

        .profile-info {
          flex: 1;
          min-width: 250px;
        }

        .profile-info h2 {
          margin: 0;
          font-size: 24px;
        }

        .profile-stats {
          display: flex;
          gap: 20px;
          margin: 12px 0;
          font-size: 16px;
        }

        .profile-bio {
          margin-bottom: 8px;
          color: #555;
        }

        .edit-button {
          padding: 6px 12px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
          cursor: pointer;
        }

        .profile-tabs {
          display: flex;
          justify-content: center;
          margin: 24px 0 12px;
          gap: 20px;
        }

        .profile-tabs button {
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          padding: 6px 12px;
          border-bottom: 2px solid transparent;
        }

        .profile-tabs .active {
          border-bottom: 2px solid black;
          font-weight: bold;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        .profile-post {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .profile-info {
            align-items: center;
          }

          .profile-stats {
            justify-content: center;
          }
        }

        @media (min-width: 768px) {
          .profile-header {
            align-items: flex-start;
            text-align: left;
          }

          .profile-info {
            align-items: flex-start;
          }

          .profile-stats {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;
