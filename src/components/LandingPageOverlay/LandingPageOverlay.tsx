import "./LandingPageOverlay.scss";
import logo from "../../assets/icon.png";

const LandingPageOverlay = () => {
  return (
    <div className="landing-page-overlay-container">
      <div className="landing-page-header">
        <div className="landing-page-logo">
          <img src={logo} alt="logo" width={30} height={30} />
          <h1 className="brand-name">Adore</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPageOverlay;
