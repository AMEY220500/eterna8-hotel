import Hero from "../components/Hero";
import "./About.css";

const About = () => {
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
          {/* Our Story */}
          <div className="about-section">
            <div className="about-content">
              <div className="about-text">
                <h2>Our Story</h2>
                <p>
                  Founded in 1995, Grand Hotel has been a cornerstone of luxury
                  hospitality for over two decades. What started as a vision to
                  create an exceptional guest experience has evolved into a
                  renowned establishment known for its impeccable service and
                  attention to detail.
                </p>
                <p>
                  Our commitment to excellence has earned us numerous accolades
                  and the loyalty of guests from around the world. We take pride
                  in creating memorable experiences that go beyond just
                  accommodation.
                </p>
              </div>
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
                  alt="Hotel Interior"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To provide an unparalleled hospitality experience through
                personalized service, luxurious accommodations, and exceptional
                attention to every guest's needs. We strive to make every stay
                memorable and exceed expectations at every touchpoint.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be recognized as the premier choice for discerning travelers
                seeking luxury, comfort, and authentic hospitality. We aim to
                set industry standards for service excellence and sustainable
                tourism practices.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="values-section">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-number">01</div>
                <h4>Excellence</h4>
                <p>
                  We maintain the highest standards in every aspect of our
                  service, from room cleanliness to guest interactions.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">02</div>
                <h4>Hospitality</h4>
                <p>
                  Warm, genuine care for our guests is at the heart of
                  everything we do. Your comfort is our priority.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">03</div>
                <h4>Integrity</h4>
                <p>
                  We conduct our business with honesty, transparency, and
                  respect for our guests, staff, and community.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">04</div>
                <h4>Innovation</h4>
                <p>
                  We continuously evolve and adapt to meet changing guest needs
                  while maintaining our timeless standards.
                </p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="awards-section">
            <h2 className="section-title">Awards & Recognition</h2>
            <div className="awards-grid">
              <div className="award-item">
                <div className="award-year">2024</div>
                <h4>Best Luxury Hotel</h4>
                <p>Hospitality Excellence Awards</p>
              </div>
              <div className="award-item">
                <div className="award-year">2023</div>
                <h4>Top Rated Service</h4>
                <p>TravelChoice Awards</p>
              </div>
              <div className="award-item">
                <div className="award-year">2023</div>
                <h4>Sustainability Champion</h4>
                <p>Green Hotel Initiative</p>
              </div>
              <div className="award-item">
                <div className="award-year">2022</div>
                <h4>Guest Favorite</h4>
                <p>Traveler's Choice Awards</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="team-section">
            <h2 className="section-title">Meet Our Leadership</h2>
            <p className="team-intro">
              Our dedicated team of hospitality professionals is committed to
              making your stay exceptional. With decades of combined experience,
              we bring passion and expertise to every guest interaction.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                    alt="General Manager"
                  />
                </div>
                <h4>John Anderson</h4>
                <p className="member-role">General Manager</p>
                <p className="member-bio">
                  20+ years of luxury hospitality experience
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                    alt="Operations Manager"
                  />
                </div>
                <h4>Sarah Mitchell</h4>
                <p className="member-role">Operations Manager</p>
                <p className="member-bio">
                  Expert in guest services and operations excellence
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
                    alt="Executive Chef"
                  />
                </div>
                <h4>Michael Chen</h4>
                <p className="member-role">Executive Chef</p>
                <p className="member-bio">Award-winning culinary expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
