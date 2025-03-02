import { useState } from "react";

const userNames = [
  "Aarav", "Olivia", "Vihaan", "Emma", "Kabir", "Liam", "Anaya", "Sophia", "Aryan", "Mia",
  "Ishaan", "Noah", "Riya", "Ava", "Vivaan", "Isabella", "Advik", "Elijah", "Saanvi", "Charlotte",
  "Reyansh", "James", "Myra", "Amelia", "Krishna", "Benjamin", "Tara", "Harper", "Atharv", "Lucas",
  "Dev", "Henry", "Pari", "Evelyn", "Sai", "Alexander", "Diya", "Ella", "Arjun", "Jack",
  "Neha", "Mila", "Rudra", "Daniel", "Aisha", "Grace", "Yuvraj", "Michael", "Meera", "Scarlett"
];

const notifications = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  type: ["like", "comment", "follow", "mention"][i % 4],
  user: {
    name: userNames[i], // Assigning a unique name from the list
    username: `user${i + 1}`, // Unique username similar to search
    avatar: `https://i.pravatar.cc/50?img=${(i % 70) + 1}`,
  },
  postImage: i % 2 === 0 ? `https://picsum.photos/100/100?random=${i + 1}` : null,
  message:
    i % 4 === 0
      ? "liked your post"
      : i % 4 === 1
      ? "commented on your post"
      : i % 4 === 2
      ? "started following you"
      : "mentioned you in a comment",
  seen: i < 15,
}));



const Notification = () => {
  const [data, setData] = useState(notifications);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Notifications</h2>
      {data.map((notification) => (
        <div
          key={notification.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            background: notification.seen ? "#fff" : "#f0f8ff",
            borderBottom: "1px solid #ddd",
          }}
        >
          <img
            src={notification.user.avatar}
            alt={notification.user.name}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <div style={{ flex: 1, textAlign: "left" }}>
            <strong>{notification.user.name}</strong> {notification.message}
          </div>
          {notification.postImage && (
            <img
              src={notification.postImage}
              alt="Post"
              style={{ width: "50px", height: "50px", borderRadius: "5px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Notification;
