import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SnakeGame from "./snakeGame.jsx";
import "../styles/Home.css";

const Home = () => {
  
  useEffect(() => {
    const overlay = document.querySelector(".network-overlay");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = overlay.getBoundingClientRect();
      const offsetX = (clientX / width) * 100;
      const offsetY = (clientY / height) * 100;

      overlay.style.background = `radial-gradient(circle at ${offsetX}% ${offsetY}%, rgba(0, 255, 0, 0.8), rgba(0, 0, 0, 0))`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero">
      <SnakeGame />
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Yash Hulle</span>
        </h1>
        <div className="text-animation">
          <h2 className="fade-in">Frontend Developer</h2>
          <h2 className="fade-in">Web Developer</h2>
          <h2 className="fade-in">Web Designer</h2>
        </div>
        <p className="tagline">
          I'm passionate about building interactive and visually appealing web
          experiences.
        </p>
        <Link to="/contact" className="cta">
          Get in Touch
        </Link>
      </div>
      <div className="network-overlay"></div>
    </section>
  );
};

export default Home;
