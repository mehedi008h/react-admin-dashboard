import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
