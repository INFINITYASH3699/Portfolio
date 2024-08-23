import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Yash Hulle</Link>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="">
              Skills
            </Link>
          </li>

          <li>
            <Link to="/projects" className="">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isOpen ? "toggle" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
