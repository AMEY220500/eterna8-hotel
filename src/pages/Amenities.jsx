import Hero from "../components/Hero";
import {
  FaWifi,
  FaSwimmingPool,
  FaSpa,
  FaParking,
  FaConciergeBell,
  FaDumbbell,
  FaUtensils,
  FaCocktail,
  FaBaby,
  FaShieldAlt,
  FaSnowflake,
  FaTv,
} from "react-icons/fa";
import "./Amenities.css";

const Amenities = () => {
  const amenitiesData = [
    {
      category: "Essential Services",
      items: [
        {
          icon: <FaWifi />,
          title: "Free High-Speed WiFi",
          description:
            "Complimentary high-speed internet access throughout the property",
        },
        {
          icon: <FaConciergeBell />,
          title: "24/7 Concierge Service",
          description: "Round-the-clock assistance for all your needs",
        },
        {
          icon: <FaParking />,
          title: "Complimentary Parking",
          description: "Secure parking facilities with valet service available",
        },
        {
          icon: <FaShieldAlt />,
          title: "24/7 Security",
          description: "CCTV surveillance and trained security personnel",
        },
      ],
    },
    {
      category: "Recreation & Wellness",
      items: [
        {
          icon: <FaSwimmingPool />,
          title: "Swimming Pools",
          description:
            "Indoor heated pool and outdoor infinity pool with stunning views",
        },
        {
          icon: <FaSpa />,
          title: "Spa & Wellness Center",
          description: "Full-service spa with massage, sauna, and steam room",
        },
        {
          icon: <FaDumbbell />,
          title: "Fitness Center",
          description: "State-of-the-art gym equipment and personal trainers",
        },
      ],
    },
    {
      category: "Dining & Entertainment",
      items: [
        {
          icon: <FaUtensils />,
          title: "Fine Dining Restaurant",
          description: "Award-winning restaurant serving international cuisine",
        },
        {
          icon: <FaCocktail />,
          title: "Rooftop Bar & Lounge",
          description:
            "Premium cocktails and light bites with panoramic city views",
        },
        {
          icon: <FaUtensils />,
          title: "Room Service",
          description: "24-hour in-room dining service",
        },
      ],
    },
    {
      category: "In-Room Amenities",
      items: [
        {
          icon: <FaSnowflake />,
          title: "Climate Control",
          description: "Individual air conditioning and heating controls",
        },
        {
          icon: <FaTv />,
          title: "Smart TV",
          description: "Large flat-screen TVs with streaming services",
        },
        {
          icon: <FaBaby />,
          title: "Family Friendly",
          description: "Cribs, high chairs, and kids menu available",
        },
      ],
    },
  ];

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
          <div className="intro-text">
            <h2>World-Class Facilities</h2>
            <p>
              At Grand Hotel, we believe in providing our guests with
              exceptional amenities that enhance their stay. From
              state-of-the-art fitness facilities to luxurious spa treatments,
              we have everything you need for a comfortable and memorable
              experience.
            </p>
          </div>

          {amenitiesData.map((category, index) => (
            <div key={index} className="amenities-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="amenities-grid">
                {category.items.map((amenity, idx) => (
                  <div key={idx} className="amenity-item">
                    <div className="amenity-icon-large">{amenity.icon}</div>
                    <div className="amenity-content">
                      <h4>{amenity.title}</h4>
                      <p>{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Info */}
          <div className="additional-info">
            <div className="info-card">
              <h3>Business Services</h3>
              <ul>
                <li>Meeting rooms and conference facilities</li>
                <li>Business center with printing and fax services</li>
                <li>High-speed WiFi throughout the property</li>
                <li>Audio-visual equipment rental</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Guest Services</h3>
              <ul>
                <li>Airport shuttle service (on request)</li>
                <li>Laundry and dry cleaning</li>
                <li>Currency exchange</li>
                <li>Tour and ticket booking assistance</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Special Features</h3>
              <ul>
                <li>Pet-friendly accommodations available</li>
                <li>Wheelchair accessible facilities</li>
                <li>Non-smoking rooms</li>
                <li>Safe deposit boxes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
