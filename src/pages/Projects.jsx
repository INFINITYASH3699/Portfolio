import React, { useEffect } from "react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
import collegeImage from "../assets/college.png";
import restaurantImage from "../assets/restaurent.png";
import opexImage from "../assets/opex.png";

const Projects = () => {
  useEffect(() => {
    const overlay = document.querySelector(".network-overlay");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = overlay.getBoundingClientRect();
      const offsetX = (clientX / width) * 100;
      const offsetY = (clientY / height) * 100;

      overlay.style.background = `radial-gradient(circle at ${offsetX}% ${offsetY}%, rgba(255, 0, 150, 0.6), rgba(0, 0, 0, 0))`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-content">
          
          <div className="project-card">
            <div className="project-front">
              <img
                src={opexImage}
                alt="Project"
                className="project-image"
              />
              <h3 className="project-title">Opex-Home-Solutions</h3>
            </div>
            <div className="project-back">
              <p>
                Opex Home Solution is an innovative platform leveraging AI and
                ML to revolutionize home design and construction with features
                like design options, architectural plans, and contractor
                connections.
              </p>
              <Link
                to="https://infinityash3699.github.io/Opex-Home-Solutions/"
                className="btn-visit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </div>
          </div>
          <div className="project-card">
            <div className="project-front">
              <img
                src={collegeImage}
                alt="Project"
                className="project-image"
              />
              <h3 className="project-title">College-Website</h3>
            </div>
            <div className="project-back">
              <p>
                This project is a college web application that manages all
                college activities and information, developed using HTML, CSS,
                and Python Framework.
              </p>
              <Link
                to="https://github.com/INFINITYASH3699/College-Website"
                className="btn-visit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </div>
          </div>
          <div className="project-card">
            <div className="project-front">
              <img
                src={restaurantImage}
                alt="Project"
                className="project-image"
              />
              <h3 className="project-title">Restaurant-Website</h3>
            </div>
            <div className="project-back">
              <p>
                Key contributor to an elegant restaurant website with features
                such as online reservations and menu browsing, developed using
                HTML, CSS, and JavaScript.
              </p>
              <Link
                to="https://github.com/INFINITYASH3699/Restaurant-Website"
                className="btn-visit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <div className="network-overlay"></div>
    </section>
  );
};

export default Projects;
