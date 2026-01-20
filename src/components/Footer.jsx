import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Grand Hotel</h3>
            <p>
              Experience luxury and comfort at its finest. Your perfect stay
              awaits.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/amenities">Amenities</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>123 Hotel Street, City, Country</span>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:info@grandhotel.com">info@grandhotel.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Business Hours</h4>
            <ul className="business-hours">
              <li>
                <span>Mon - Fri:</span>
                <span>24/7</span>
              </li>
              <li>
                <span>Saturday:</span>
                <span>24/7</span>
              </li>
              <li>
                <span>Sunday:</span>
                <span>24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Grand Hotel. All rights reserved.</p>
          <p>Designed with ❤️ for excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
