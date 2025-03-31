import React from "react";
import "../../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="homepage">
        <h2>Hi I'm</h2>
        <h1 className="title">Talita Alves Gomes</h1>
        <h3>Frontend Developer, based in Barcelona</h3>
        <Link to="/about">
          
          <button className="main-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
