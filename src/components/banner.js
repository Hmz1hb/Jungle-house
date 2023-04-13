import "../styles/Banner.css";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <div className="jh-banner">
      <img src={logo} alt="Jungle house" className="jh-logo" />
      <h1 className="jh-title">The jungle house</h1>
    </div>
  );
};

export default Banner;
