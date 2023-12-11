import GradientEffect from "../../components/GradientEffect/GradientEffect";
import PageBg from "../../components/PageBg/PageBg";
import logo from "../../assets/logo404.png";
import "./PageNotFound.scss";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <PageBg />
      <div>
        <GradientEffect />
        <div className="notfound-page">
          <div className="notfound-page-header">
            <div className="notfound-page-logo">
              <img src={logo} alt="logo" width={30} height={30} />
              <h1 className="brand-name">Adore</h1>
            </div>
          </div>
          <div className="f404">
            <h1 className="four">4</h1>
            <img src={logo} alt="img" width={110} height={110} />
            <h1 className="four">4</h1>
          </div>
          <p style={{ lineHeight: 1.5 }}>
            <span style={{ color: "#e85182" }}>Error (404):</span> The page you
            were searching for, seems to have vanished, leaving our app with a
            broken heart. Either you've mistyped the address or the page decided
            to ghost us and move elsewhere.
            <br />
            <br />
            <span className="hashtags">#404Error #BrokenHeartedApp</span>
          </p>
          <NavLink to={"/"} className="primary-button home-btn">
            Back to Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
