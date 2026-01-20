import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>Grand Hotel</h1>
        </Link>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/rooms"
            className={`nav-link ${isActive("/rooms")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Rooms
          </Link>
          <Link
            to="/amenities"
            className={`nav-link ${isActive("/amenities")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Amenities
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <a href="tel:+1234567890" className="phone-button">
            <FaPhone /> Call Now
          </a>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
