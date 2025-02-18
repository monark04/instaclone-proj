import Post from "./Post";

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
