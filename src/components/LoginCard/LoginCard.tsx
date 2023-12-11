import "./LoginCard.scss";
import logo from "../../assets/icon.png";
import { Link } from "react-router-dom";

const LoginCardTitle = () => {
  return (
    <div className="login-card-top">
      <div className="logo-img">
        <img src={logo} alt="img" />
      </div>
      <div className="login-card-title">
        <h4>Log in to Adore</h4>
      </div>
      <p className="login-description">
        Share the moments with few clicks.
      </p>
    </div>
  );
};
const LoginForm = () => {
  return (
    <div className="login-card-bottom">
      <form>
        <label>Email address</label>
        <input type="email" placeholder="name@domain.com" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit" className="primary-button sign-in-button">
          Log in with Email
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/sign-up">
          <a>Sign Up</a>
        </Link>
        .
      </p>
    </div>
  );
};

const LoginCard = () => {
  return (
    <div className="login-page-container">
      <div className="login-page-header">
        <div className="login-page-logo">
          <img src={logo} alt="logo" width={30} height={30} />
          <h1 className="brand-name">Adore</h1>
        </div>
      </div>

      <div className="login-card">
        <LoginCardTitle />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginCard;
