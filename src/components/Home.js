import React from "react";
import "../css/Home.css";
import Products from "./Products";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Products />
      
    </div>
  );
};

export default Home;
