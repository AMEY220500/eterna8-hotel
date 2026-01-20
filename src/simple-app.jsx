// Simple Router Implementation
const { useState, useEffect } = React;

// Icon components using Font Awesome
const FaBars = () => <i className="fas fa-bars"></i>;
const FaTimes = () => <i className="fas fa-times"></i>;
const FaPhone = () => <i className="fas fa-phone"></i>;
const FaEnvelope = () => <i className="fas fa-envelope"></i>;
const FaMapMarkerAlt = () => <i className="fas fa-map-marker-alt"></i>;
const FaClock = () => <i className="fas fa-clock"></i>;
const FaFacebookF = () => <i className="fab fa-facebook-f"></i>;
const FaTwitter = () => <i className="fab fa-twitter"></i>;
const FaInstagram = () => <i className="fab fa-instagram"></i>;
const FaBed = () => <i className="fas fa-bed"></i>;
const FaUsers = () => <i className="fas fa-users"></i>;
const FaWifi = () => <i className="fas fa-wifi"></i>;
const FaSwimmingPool = () => <i className="fas fa-swimming-pool"></i>;
const FaSpa = () => <i className="fas fa-spa"></i>;
const FaParking = () => <i className="fas fa-parking"></i>;
const FaConciergeBell = () => <i className="fas fa-concierge-bell"></i>;
const FaDumbbell = () => <i className="fas fa-dumbbell"></i>;
const FaUtensils = () => <i className="fas fa-utensils"></i>;
const FaCocktail = () => <i className="fas fa-cocktail"></i>;
const FaBaby = () => <i className="fas fa-baby"></i>;
const FaShieldAlt = () => <i className="fas fa-shield-alt"></i>;
const FaSnowflake = () => <i className="fas fa-snowflake"></i>;
const FaTv = () => <i className="fas fa-tv"></i>;
const FaStar = () => <i className="fas fa-star"></i>;

// Simple Router
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(
    window.location.hash.slice(1) || "/"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || "/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return children({ currentPath });
};

const Link = ({ to, children, className, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.hash = to;
    if (onClick) onClick();
  };

  return (
    <a href={`#${to}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

// Header Component
const Header = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => (currentPath === path ? "active" : "");

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>ETERNA 8</h1>
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
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

// Footer Component
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
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
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

// Hero Component
const Hero = ({ title, subtitle, image, height = "600px" }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        height: height,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

// RoomCard Component
const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <div className="room-image">
        <img src={room.image} alt={room.name} />
        {room.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="room-info">
        <h3>{room.name}</h3>
        <p className="room-description">{room.description}</p>

        <div className="room-features">
          <div className="feature">
            <FaBed />
            <span>{room.beds}</span>
          </div>
          <div className="feature">
            <FaUsers />
            <span>{room.guests} Guests</span>
          </div>
          <div className="feature">
            <FaWifi />
            <span>Free WiFi</span>
          </div>
        </div>

        <div className="room-footer">
          <div className="price">
            <span className="price-label">From</span>
            <span className="price-amount">${room.price}</span>
            <span className="price-period">/night</span>
          </div>
          <a href="tel:+1234567890" className="btn btn-primary">
            Call to Book
          </a>
        </div>
      </div>
    </div>
  );
};

// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "standard",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required";
    if (
      formData.checkIn &&
      formData.checkOut &&
      formData.checkIn >= formData.checkOut
    ) {
      newErrors.checkOut = "Check-out must be after check-in";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "1",
          roomType: "standard",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form success-message">
        <h3>Thank You!</h3>
        <p>
          We've received your booking inquiry. Our team will contact you
          shortly.
        </p>
        <p>
          📞 Or call us directly at:{" "}
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5+ Guests</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="checkIn">Check-in Date *</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={errors.checkIn ? "error" : ""}
          />
          {errors.checkIn && (
            <span className="error-message">{errors.checkIn}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">Check-out Date *</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            min={formData.checkIn || new Date().toISOString().split("T")[0]}
            className={errors.checkOut ? "error" : ""}
          />
          {errors.checkOut && (
            <span className="error-message">{errors.checkOut}</span>
          )}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="roomType">Preferred Room Type</label>
        <select
          id="roomType"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
        >
          <option value="standard">Standard Room</option>
          <option value="deluxe">Deluxe Room</option>
          <option value="suite">Suite</option>
          <option value="family">Family Room</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Special Requests (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any special requests or requirements..."
        />
      </div>
      <button type="submit" className="btn btn-primary btn-full">
        Submit Inquiry
      </button>
      <p className="form-note">
        * Required fields. We'll call you to confirm your booking.
      </p>
    </form>
  );
};

// Home Page
const HomePage = () => {
  const featuredRooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description:
        "Spacious room with modern amenities and beautiful city views.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      price: 150,
      beds: "1 King Bed",
      guests: 2,
      featured: true,
    },
    {
      id: 2,
      name: "Executive Suite",
      description:
        "Luxurious suite with separate living area and premium facilities.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      price: 250,
      beds: "1 King Bed",
      guests: 3,
      featured: true,
    },
    {
      id: 3,
      name: "Family Room",
      description: "Perfect for families with extra space and multiple beds.",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      price: 200,
      beds: "2 Queen Beds",
      guests: 4,
      featured: false,
    },
  ];

  return (
    <div className="home-page">
      <Hero
        title="Welcome to ETERNA 8 Hotel by YSR"
        subtitle="Experience luxury and comfort at its finest"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600"
        height="700px"
      />

      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2>Your Home Away From Home</h2>
              <p>
                At Grand Hotel, we pride ourselves on providing exceptional
                service and unforgettable experiences.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
            <div className="welcome-image">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
                alt="Hotel Lobby"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-rooms">
        <div className="container">
          <h2 className="section-title">Featured Rooms</h2>
          <div className="rooms-grid">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/rooms" className="btn btn-primary">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Stay?</h2>
            <p>Contact us today to reserve your room</p>
            <div className="cta-buttons">
              <a href="tel:+1234567890" className="btn btn-primary btn-large">
                Call Now: +1 (234) 567-890
              </a>
              <Link to="/contact" className="btn btn-outline btn-large">
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Rooms Page
const RoomsPage = () => {
  const allRooms = [
    {
      id: 1,
      name: "Standard Room",
      description: "Comfortable and affordable room.",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      price: 99,
      beds: "1 Queen Bed",
      guests: 2,
      category: "standard",
    },
    {
      id: 2,
      name: "Deluxe Room",
      description: "Spacious room with modern amenities.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      price: 150,
      beds: "1 King Bed",
      guests: 2,
      category: "deluxe",
      featured: true,
    },
    {
      id: 3,
      name: "Executive Suite",
      description: "Luxurious suite with living area.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      price: 250,
      beds: "1 King Bed",
      guests: 3,
      category: "suite",
      featured: true,
    },
    {
      id: 4,
      name: "Family Room",
      description: "Perfect for families.",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      price: 200,
      beds: "2 Queen Beds",
      guests: 4,
      category: "family",
    },
    {
      id: 5,
      name: "Presidential Suite",
      description: "Ultimate luxury.",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      price: 450,
      beds: "1 King Bed",
      guests: 4,
      category: "suite",
      featured: true,
    },
    {
      id: 6,
      name: "Twin Standard",
      description: "Two comfortable twin beds.",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
      price: 110,
      beds: "2 Twin Beds",
      guests: 2,
      category: "standard",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filterRooms = () => {
    let filtered =
      selectedCategory === "all"
        ? allRooms
        : allRooms.filter((room) => room.category === selectedCategory);
    if (sortBy === "price-low")
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high")
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    else if (sortBy === "featured")
      filtered = [...filtered].sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      );
    return filtered;
  };

  const filteredRooms = filterRooms();

  return (
    <div className="rooms-page">
      <Hero
        title="Our Rooms & Suites"
        subtitle="Find the perfect accommodation for your stay"
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600"
        height="400px"
      />
      <section className="section">
        <div className="container">
          <div className="filters-section">
            <div className="filter-group">
              <label>Room Type:</label>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${
                    selectedCategory === "all" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Rooms
                </button>
                <button
                  className={`filter-btn ${
                    selectedCategory === "standard" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("standard")}
                >
                  Standard
                </button>
                <button
                  className={`filter-btn ${
                    selectedCategory === "deluxe" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("deluxe")}
                >
                  Deluxe
                </button>
                <button
                  className={`filter-btn ${
                    selectedCategory === "suite" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("suite")}
                >
                  Suites
                </button>
                <button
                  className={`filter-btn ${
                    selectedCategory === "family" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("family")}
                >
                  Family
                </button>
              </div>
            </div>
            <div className="sort-group">
              <label htmlFor="sort">Sort By:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="results-info">
            <p>
              Showing {filteredRooms.length}{" "}
              {filteredRooms.length === 1 ? "room" : "rooms"}
            </p>
          </div>
          <div className="rooms-grid">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Amenities Page (simplified)
const AmenitiesPage = () => {
  return (
    <div className="amenities-page">
      <Hero
        title="Hotel Amenities & Services"
        subtitle="Everything you need for a perfect stay"
        image="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600"
        height="400px"
      />
      <section className="section">
        <div className="container">
          <h2 className="section-title">World-Class Facilities</h2>
          <div className="amenities-grid">
            <div className="amenity-item">
              <div className="amenity-icon-large">
                <FaWifi />
              </div>
              <div className="amenity-content">
                <h4>Free High-Speed WiFi</h4>
                <p>Complimentary internet throughout the property</p>
              </div>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon-large">
                <FaSwimmingPool />
              </div>
              <div className="amenity-content">
                <h4>Swimming Pools</h4>
                <p>Indoor and outdoor pools</p>
              </div>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon-large">
                <FaSpa />
              </div>
              <div className="amenity-content">
                <h4>Spa & Wellness</h4>
                <p>Full-service spa with massage and sauna</p>
              </div>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon-large">
                <FaDumbbell />
              </div>
              <div className="amenity-content">
                <h4>Fitness Center</h4>
                <p>State-of-the-art gym equipment</p>
              </div>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon-large">
                <FaUtensils />
              </div>
              <div className="amenity-content">
                <h4>Fine Dining</h4>
                <p>Award-winning restaurant</p>
              </div>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon-large">
                <FaParking />
              </div>
              <div className="amenity-content">
                <h4>Free Parking</h4>
                <p>Secure parking facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page (simplified)
const AboutPage = () => {
  return (
    <div className="about-page">
      <Hero
        title="About Grand Hotel"
        subtitle="A legacy of excellence in hospitality"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600"
        height="400px"
      />
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 1995, Grand Hotel has been a cornerstone of luxury
                hospitality for over two decades.
              </p>
              <p>
                Our commitment to excellence has earned us numerous accolades
                and the loyalty of guests from around the world.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
                alt="Hotel Interior"
              />
            </div>
          </div>
          <div className="mission-vision">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To provide an unparalleled hospitality experience through
                personalized service and luxurious accommodations.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be recognized as the premier choice for discerning travelers
                seeking luxury and authentic hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div className="contact-page">
      <Hero
        title="Get In Touch"
        subtitle="We're here to help make your stay perfect"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600"
        height="400px"
      />
      <section className="section">
        <div className="container">
          <div className="contact-intro">
            <h2>Contact Grand Hotel</h2>
            <p>
              Have questions? Our friendly team is available 24/7 to assist you.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info-section">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-details">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@grandhotel.com">info@grandhotel.com</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-details">
                  <h4>Address</h4>
                  <p>123 Hotel Street, City, Country</p>
                </div>
              </div>
            </div>
            <div className="contact-form-section">
              <h3>Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App
const App = () => {
  return (
    <Router>
      {({ currentPath }) => (
        <div className="app">
          <Header currentPath={currentPath} />
          <main className="main-content">
            {currentPath === "/" && <HomePage />}
            {currentPath === "/rooms" && <RoomsPage />}
            {currentPath === "/amenities" && <AmenitiesPage />}
            {currentPath === "/about" && <AboutPage />}
            {currentPath === "/contact" && <ContactPage />}
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

// Render App
ReactDOM.render(<App />, document.getElementById("root"));
