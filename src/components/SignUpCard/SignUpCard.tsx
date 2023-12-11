import { Link } from "react-router-dom";
import logo from "../../assets/icon.png";
import "./SignUpCard.scss";

const SignUpCardTitle = () => {
  return (
    <div className="signup-card-top">
      <div className="logo-img">
        <img src={logo} alt="img" />
      </div>
      <div className="signup-card-title">
        <h4>Register to Adore</h4>
      </div>
      <p className="signup-description">
        Get started for free. No money required.
      </p>
    </div>
  );
};
const SignUpForm = () => {
  return (
    <div className="signup-card-bottom">
      <form>
        <label>Email address</label>
        <input type="email" placeholder="name@domain.com" required />

        <label>Password</label>
        <input type="password" placeholder="Create new password" required />

        <label>Confirm Password</label>
        <input type="password" placeholder="Re-enter new password" required />

        <button type="submit" className="primary-button sign-in-button">
          Sign Up with Email
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">
          <a>Log In</a>
        </Link>
        .
      </p>
    </div>
  );
};

const SignUpCard = () => {
  return (
    <div className="signup-page-container">
      <div className="signup-page-header">
        <div className="signup-page-logo">
          <img src={logo} alt="logo" width={30} height={30} />
          <h1 className="brand-name">Adore</h1>
        </div>
      </div>

      <div className="signup-card">
        <SignUpCardTitle />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpCard;
