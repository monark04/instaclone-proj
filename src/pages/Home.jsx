import Post from "./Post";

const posts = [
  { 
    id: 1, 
    image: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg", 
    user: { 
      name: "John Doe", 
      avatar: "https://randomuser.me/api/portraits/men/32.jpg" 
    }, 
    caption: "Chilling at the beach!" 
  },
  { 
    id: 2, 
    image: "https://images.pexels.com/photos/3688933/pexels-photo-3688933.jpeg", 
    user: { 
      name: "Jane Smith", 
      avatar: "https://randomuser.me/api/portraits/women/45.jpg" 
    }, 
    caption: "Morning vibes 🌅" 
  },
  { 
    id: 3, 
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", 
    user: { 
      name: "Alex Lee", 
      avatar: "https://randomuser.me/api/portraits/men/76.jpg" 
    }, 
    caption: "City lights at night 🌃" 
  },
  { 
    id: 4, 
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg", 
    user: { 
      name: "Emma Watson", 
      avatar: "https://randomuser.me/api/portraits/women/68.jpg" 
    }, 
    caption: "Exploring the mountains ⛰️" 
  },
  { 
    id: 5, 
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", 
    user: { 
      name: "David Miller", 
      avatar: "https://randomuser.me/api/portraits/men/22.jpg" 
    }, 
    caption: "Coffee and work ☕💻" 
  }
];



const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5 space-y-8">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Home;
