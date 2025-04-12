import React, { useState, useEffect } from "react";
import MChatFeed from "../components/mChatFeed.jsx";
import MChat from "../components/mChat.jsx";
import DesktopChatFeed from "../components/desktopChatFeed.jsx";
import DesktopChat from "../components/desktopChat.jsx";

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: isMobile ? "column" : "row",
        backgroundColor: "#fff",
      }}
    >
      {isMobile ? (
        selectedUser ? (
          <MChat selectedUser={selectedUser} onBack={() => setSelectedUser(null)} />
        ) : (
          <MChatFeed onSelectChat={setSelectedUser} />
        )
      ) : (
        <>
          {/* Chat List Panel */}
          <div
            style={{
              marginLeft: 250,
              width: "500px",  // Fixed width, no full-width issue
              minWidth: "250px",
              borderRight: "1px solid #ddd",
              flexShrink: 0,
            }}
          >
            <DesktopChatFeed onSelectChat={setSelectedUser} />
          </div>

          {/* Chat Window Expanding to Fill */}
          <div style={{ flex: 1, display: "flex" }}>
            {selectedUser ? (
              <DesktopChat selectedUser={selectedUser} />
            ) : (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "#888",
                }}
              >
                Select a chat to start messaging
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;
