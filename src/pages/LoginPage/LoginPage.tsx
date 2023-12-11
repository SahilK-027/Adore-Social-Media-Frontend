import GradientEffect from "../../components/GradientEffect/GradientEffect";
import LoginCard from "../../components/LoginCard/LoginCard";
import LoginPageBg from "../../components/LoginPageBg/LoginPageBg";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <LoginPageBg />
      <GradientEffect />
      <LoginCard />
    </>
  );
};

export default LoginPage;
