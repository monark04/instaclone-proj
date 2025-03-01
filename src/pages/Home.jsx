import React from "react";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      backgroundColor: "#fafafa",
      minHeight: "100vh"
    }}>
      <Feed />
    </div>
  );
};

export default Home;
