import React from "react";
import "./desktopChatFeed.css";
import { users } from "./User";

const DesktopChatFeed = ({ onSelectChat }) => {
    // console.log("✅ DesktopChatFeed is mounting...");
    // return (
    //   <div className="desktopChatFeed">
    //     <h2>Messages</h2>
    //     <p style={{ color: "red" }}>Debug: Component Loaded</p>
    //     </div>)

  return (
    
    <div className="desktopChatFeed">
      <h2>Messages</h2>
      <div className="chat-list">
        {users.slice(0, 20).map((user) => (
          <div
            key={user.id}
            className="chat-item"
            onClick={() => onSelectChat(user)}
          >
            <img src={user.avatar} alt={user.name} className="chat-avatar" />
            <div className="chat-info">
              <h4>{user.name}</h4>
              <p>{user.messages[user.messages.length - 1].text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


};
export default DesktopChatFeed;
