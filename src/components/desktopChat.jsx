import React, { useState } from "react";
import "./desktopChat.css";

const DesktopChat = ({ selectedUser }) => {
  const [messages, setMessages] = useState(selectedUser.messages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sent: true }]);
      setNewMessage("");
    }
  };

  return (
    <div className="desktopChat">
      <div className="chat-header">
        <img src={selectedUser.avatar} alt={selectedUser.name} className="chat-avatar" />
        <h3>{selectedUser.name}</h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sent ? "sent" : "received"}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default DesktopChat;
