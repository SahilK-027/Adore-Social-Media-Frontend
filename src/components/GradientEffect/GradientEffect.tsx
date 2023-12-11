import "./GradientEffect.scss"
const GradientEffect = () => {
  return (
    <div className="page-gradient">
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

export default GradientEffect;
