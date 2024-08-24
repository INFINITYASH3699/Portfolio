import React, { useEffect } from "react";
import mypic from "../assets/mypic.png";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    const overlay = document.querySelector(".network-overlay");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = overlay.getBoundingClientRect();
      const offsetX = (clientX / width) * 100;
      const offsetY = (clientY / height) * 100;

      overlay.style.background = `radial-gradient(circle at ${offsetX}% ${offsetY}%, rgba(0, 255, 255, 0.8), rgba(0, 0, 0, 0))`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <img
          src={mypic}
          alt="Yash Hulle"
          className="profile-pic"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm <span className="about-highlight">Yash Hulle</span>, a passionate
            Frontend Developer, Web Developer, and Web Designer. Currently,
            I'm in my final year of B.Tech in Computer Science Engineering. I
            love creating interactive and visually appealing web applications
            that solve real-world problems.
          </p>
          <p>
            I have a strong foundation in
            <span className="about-highlight">HTML, CSS, JavaScript, React, Python, SQL, and MongoDB</span>.
            I enjoy working on challenging projects and continuously improving
            my skills. Whether it's developing a responsive website, designing
            user-friendly interfaces, or writing efficient code, I'm always
            eager to take on new challenges and learn from them.
          </p>
          <p>
            In my spare time, I enjoy exploring the latest web technologies,
            contributing to open-source projects, and staying updated with
            industry trends. I'm also interested in AI and machine learning,
            and how they can be applied to web development.
          </p>
        </div>
      </div>
      <div className="network-overlay"></div>
    </section>
  );
};

export default About;
