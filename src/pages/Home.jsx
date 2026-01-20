import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import RoomCard from "../components/RoomCard";
import {
  FaWifi,
  FaSwimmingPool,
  FaSpa,
  FaParking,
  FaConciergeBell,
  FaDumbbell,
  FaStar,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
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

  const amenities = [
    {
      icon: <FaWifi />,
      title: "Free WiFi",
      description: "High-speed internet",
    },
    {
      icon: <FaSwimmingPool />,
      title: "Swimming Pool",
      description: "Indoor & outdoor",
    },
    {
      icon: <FaSpa />,
      title: "Spa & Wellness",
      description: "Full service spa",
    },
    {
      icon: <FaParking />,
      title: "Free Parking",
      description: "Secure parking",
    },
    {
      icon: <FaConciergeBell />,
      title: "24/7 Service",
      description: "Concierge available",
    },
    {
      icon: <FaDumbbell />,
      title: "Fitness Center",
      description: "Modern equipment",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Absolutely wonderful experience! The staff was incredibly friendly and the room was spotless.",
      location: "New York, USA",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment:
        "Best hotel stay I've had in years. The amenities are top-notch and the location is perfect.",
      location: "Toronto, Canada",
    },
    {
      name: "Emma Williams",
      rating: 5,
      comment:
        "Exceeded all expectations. Will definitely be coming back on my next visit!",
      location: "London, UK",
    },
  ];

  return (
    <div className="home-page">
      <Hero
        title="Welcome to Grand Hotel"
        subtitle="Experience luxury and comfort at its finest"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600"
        height="700px"
      />

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2>Your Home Away From Home</h2>
              <p>
                At Grand Hotel, we pride ourselves on providing exceptional
                service and unforgettable experiences. Our luxurious
                accommodations, world-class amenities, and prime location make
                us the perfect choice for both business and leisure travelers.
              </p>
              <p>
                Whether you're here for a romantic getaway, family vacation, or
                business trip, our dedicated team is committed to making your
                stay extraordinary.
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

      {/* Featured Rooms */}
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

      {/* Amenities */}
      <section
        className="section amenities-section"
        style={{ backgroundColor: "var(--bg-light)" }}
      >
        <div className="container">
          <h2 className="section-title">Our Amenities</h2>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <div className="amenity-icon">{amenity.icon}</div>
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/amenities" className="btn btn-outline">
              Explore All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Stay?</h2>
            <p>
              Contact us today to reserve your room and experience luxury
              hospitality
            </p>
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

export default Home;
