import { useState } from "react";
import Hero from "../components/Hero";
import RoomCard from "../components/RoomCard";
import "./Rooms.css";

const Rooms = () => {
  const allRooms = [
    {
      id: 1,
      name: "Standard Room",
      description:
        "Comfortable and affordable room with essential amenities for a pleasant stay.",
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
      description:
        "Spacious room with modern amenities and beautiful city views.",
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
      description:
        "Luxurious suite with separate living area and premium facilities.",
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
      description: "Perfect for families with extra space and multiple beds.",
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
      description:
        "Ultimate luxury with panoramic views, private lounge, and exclusive services.",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      price: 450,
      beds: "1 King Bed + Sofa Bed",
      guests: 4,
      category: "suite",
      featured: true,
    },
    {
      id: 6,
      name: "Twin Standard",
      description:
        "Two comfortable twin beds, ideal for friends or colleagues traveling together.",
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

    // Sort rooms
    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === "featured") {
      filtered = [...filtered].sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      );
    }

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
          {/* Filters */}
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

          {/* Results Count */}
          <div className="results-info">
            <p>
              Showing {filteredRooms.length}{" "}
              {filteredRooms.length === 1 ? "room" : "rooms"}
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="rooms-grid">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <div className="no-results">
              <p>No rooms found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
