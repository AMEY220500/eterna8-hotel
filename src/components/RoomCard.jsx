import { FaBed, FaUsers, FaWifi } from "react-icons/fa";
import "./RoomCard.css";

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

export default RoomCard;
