// User.jsx - Defines user details with dummy data
import React from "react";

const names = [
  "Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Sophia", "Lucas", "Mia",
  "Benjamin", "Charlotte", "Elijah", "Amelia", "Henry", "Evelyn", "Alexander", "Abigail", "Sebastian", "Ella",
  "Jack", "Scarlett", "Daniel", "Grace", "Matthew", "Chloe", "Joseph", "Victoria", "Samuel", "Riley",
  "David", "Aria", "Carter", "Lily", "Owen", "Aubrey", "Wyatt", "Zoey", "John", "Penelope",
  "Luke", "Lillian", "Gabriel", "Addison", "Anthony", "Layla", "Isaac", "Natalie", "Dylan", "Hannah",
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Ayaan", "Krishna", "Ishaan", "Kabir",
  "Dhruv", "Rohan", "Aryan", "Kian", "Atharv", "Kartik", "Nirvaan", "Om", "Reyansh", "Shivay",
  "Anaya", "Siya", "Myra", "Aadhya", "Ira", "Avni", "Kiara", "Pari", "Riya", "Saanvi",
  "Tara", "Vanya", "Zoya", "Ishita", "Meera", "Navya", "Trisha", "Neha", "Pooja", "Sneha"
];

const generateUserId = (name, index) => {
  const randomString = Math.random().toString(36).substring(2, 6);
  return `${name.toLowerCase().replace(/\s+/g, "")}${index}${randomString}`;
};

const users = Array.from({ length: 300 }, (_, i) => ({
  id: generateUserId(names[i % names.length], i + 1),
  name: names[i % names.length],
  avatar: `https://i.pravatar.cc/50?img=${(i % 70) + 1}`,
  bio: `This is a sample bio for ${names[i % names.length]}.`,
  messages: [
    { text: "Hey, how are you?", sent: Math.random() > 0.5 },
    { text: "I'm good! What about you?", sent: Math.random() > 0.5 },
  ],
}));

const User = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <h3 className="user-name">{user.name}</h3>
      <p className="user-id">@{user.id}</p>
      <p className="user-bio">{user.bio}</p>
    </div>
  );
};

export { User, users };
