import React, { useEffect } from "react";
import "../styles/Skills.css";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/js.webp";
import react from "../assets/react.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import mongodb from "../assets/mongodb.png";

const Skills = () => {
  useEffect(() => {
    const overlay = document.querySelector(".network-overlay");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = overlay.getBoundingClientRect();
      const offsetX = (clientX / width) * 100;
      const offsetY = (clientY / height) * 100;

      overlay.style.background = `radial-gradient(circle at ${offsetX}% ${offsetY}%, rgba(0, 255, 255, 0.5), rgba(0, 0, 0, 0))`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>My Skills</h2>
        <div className="skill-icons">
          <div className="skill-item" title="html">
            <img src={html} alt="html" />
          </div>
          <div className="skill-item" title="css">
            <img src={css} alt="css" />
          </div>
          <div className="skill-item" title="js">
            <img src={js} alt="js" />
          </div>
          <div className="skill-item" title="react">
            <img src={react} alt="react" />
          </div>
          <div className="skill-item" title="python">
            <img src={python} alt="python" />
          </div>
          <div className="skill-item" title="sql">
            <img src={sql} alt="sql" />
          </div>
          <div className="skill-item" title="mongodb">
            <img src={mongodb} alt="mongodb" />
          </div>
        </div>
      </div>
      <div className="network-overlay"></div>
    </section>
  );
};

export default Skills;
