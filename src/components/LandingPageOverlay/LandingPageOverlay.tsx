import "./LandingPageOverlay.scss";
import logo from "../../assets/icon.png";

const LandingPageHeader = () => {
  return (
    <div className="landing-page-header">
      <div className="landing-page-logo">
        <img src={logo} alt="logo" width={30} height={30} />
        <h1 className="brand-name">Adore</h1>
      </div>
    </div>
  );
};

const GradientEffect = () => {
  return (
    <div className="landing-page-gradient">
      <div className="gradient-top">
        <div className="gradient-box gradient-box-red"></div>
        <div className="gradient-box gradient-box-pink"></div>
      </div>
      <div className="gradient-bottom">
        <div className="gradient-box gradient-box-magenta"></div>
        <div className="gradient-box gradient-box-purple"></div>
      </div>
    </div>
  );
};

const LandingPageOverlay = () => {
  return (
    <div className="landing-page-overlay-container">
      <LandingPageHeader />
      <GradientEffect />
    </div>
  );
};

export default LandingPageOverlay;
