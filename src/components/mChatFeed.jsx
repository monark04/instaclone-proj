import React, { useState } from "react";
import "./mChatFeed.css";
import { users } from "./User";

const mChatFeed = ({ onSelectChat }) => {
  return (
    <div className="mChatFeed">
      <h2 className="chat-title">Messages</h2>
      <div className="chat-list">
        {users.slice(0, 20).map((user) => (
          <div
            key={user.id}
            className="chat-item"
            onClick={() => onSelectChat(user)}
          >
            <img src={user.avatar} alt={user.name} className="chat-avatar" />
            <div className="chat-info">
              <h4 className="chat-name">{user.name}</h4>
              <p className="chat-preview">{user.messages[user.messages.length - 1].text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default mChatFeed;
