import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <Link to="mailto:yash.hulle3699@gmail.com">
          <img src={gmail} alt="Mail" className="icons" />
        </Link>
        <Link
          to="https://www.Linkedin.com/in/yash-hulle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Linkedin" className="icons" />
        </Link>
        <Link
          to="https://github.com/INFINITYASH3699"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" className="icons" />
        </Link>
        <Link
          to="https://www.instagram.com/infinit_y_ash/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" className="icons" />
        </Link>
        <Link
          to="https://x.com/Yash10886895?s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className="icons" />
        </Link>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Yash Hulle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
