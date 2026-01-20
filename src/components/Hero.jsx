import "./Hero.css";

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

export default Hero;
