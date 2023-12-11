import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./LandingPageOverlay.scss";
import logo from "../../assets/icon.png";
import { Link } from "react-router-dom";

const LandingPageHeader = () => {
  return (
    <div className="landing-page-header">
      <div className="landing-page-logo">
        <img src={logo} alt="logo" width={30} height={30} />
        <h1 className="brand-name">Adore</h1>
      </div>
      <div className="landing-page-login-signup-btn">
        <Link to="/login">
          <button className="landing-page-login-btn"> Log In </button>
        </Link>
        <Link to="/login">
          <button className="landing-page-signup-btn"> Sign Up </button>
        </Link>
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

const LandingPageHeroText = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const animationProps = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(50px)",
    from: { opacity: 0, transform: "translateY(50px)" },
  });
  const btnAnimationProps = useSpring({
    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <div className="landing-page-hero-text">
      <animated.h1 style={animationProps}>
        Welcome to <span>Adore</span>
      </animated.h1>
      <animated.p style={animationProps}>
        Connect, share, and feel. Our social platform cultivates meaningful
        connections, fostering a vibrant community.
      </animated.p>
      <Link to="/login">
        <animated.button style={btnAnimationProps}>
          Create Your Free Account
        </animated.button>
      </Link>
    </div>
  );
};

const LandingPageOverlay = () => {
  return (
    <div className="landing-page-overlay-container">
      <LandingPageHeader />
      <GradientEffect />
      <LandingPageHeroText />
    </div>
  );
};

export default LandingPageOverlay;
