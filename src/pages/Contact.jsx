import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
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
              Have questions about your stay? Need to make a special request?
              Our friendly team is available 24/7 to assist you. Call us
              directly or fill out the form below, and we'll get back to you
              promptly.
            </p>
          </div>

          <div className="contact-content">
            {/* Contact Information */}
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
                  <p>
                    <a href="tel:+1234567891">+1 (234) 567-891</a>{" "}
                    (Reservations)
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
                  <p>
                    <a href="mailto:reservations@grandhotel.com">
                      reservations@grandhotel.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-details">
                  <h4>Address</h4>
                  <p>123 Hotel Street</p>
                  <p>Downtown District</p>
                  <p>City, State 12345</p>
                  <p>Country</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-details">
                  <h4>Reception Hours</h4>
                  <p>Open 24 hours</p>
                  <p>Check-in: 3:00 PM</p>
                  <p>Check-out: 11:00 AM</p>
                </div>
              </div>

              {/* Map */}
              <div className="map-container">
                <h4>Location</h4>
                <div className="map-placeholder">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750447!2d-73.98731668459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959873660!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Hotel Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h3>Send Us a Message</h3>
              <p className="form-description">
                Fill out the form below with your booking inquiry or questions,
                and our team will contact you shortly.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Quick Info */}
          <div className="quick-info">
            <div className="quick-info-card">
              <h4>💼 Business Inquiries</h4>
              <p>For corporate bookings and events</p>
              <a href="mailto:business@grandhotel.com">
                business@grandhotel.com
              </a>
            </div>
            <div className="quick-info-card">
              <h4>🎉 Events & Weddings</h4>
              <p>Plan your special occasion with us</p>
              <a href="mailto:events@grandhotel.com">events@grandhotel.com</a>
            </div>
            <div className="quick-info-card">
              <h4>📰 Media & Press</h4>
              <p>Press inquiries and media kits</p>
              <a href="mailto:press@grandhotel.com">press@grandhotel.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
