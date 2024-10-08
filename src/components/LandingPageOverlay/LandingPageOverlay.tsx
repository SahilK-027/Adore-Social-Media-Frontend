import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import GradientEffect from "../GradientEffect/GradientEffect";
import logo from "../../assets/icon.svg";
import "./LandingPageOverlay.scss";

const LandingPageHeader = () => {
  return (
    <div className="landing-page-header">
      <Link to="/">
        <div className="landing-page-logo">
          <img src={logo} alt="logo" width={30} height={30} />
          <h1 className="brand-name">Adore</h1>
        </div>
      </Link>
      <div className="landing-page-login-signup-btn">
        <Link to="/login">
          <button className="landing-page-login-btn"> Log In </button>
        </Link>
        <Link to="/sign-up">
          <button className="landing-page-signup-btn"> Sign Up </button>
        </Link>
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
      <Link to="/sign-up">
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
