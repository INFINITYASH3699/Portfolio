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

    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault(); // Prevent the default scrolling behavior
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
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
        <a href="#contact" className="cta">
          Get in Touch
        </a>
      </div>
      <div className="network-overlay"></div>
    </section>
  );
};

export default Home;
