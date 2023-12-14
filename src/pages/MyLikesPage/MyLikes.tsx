import SideBar from "../../components/SideBar/SideBar";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import "./MyLikes.scss";

const MyLikes = () => {
  return (
    <div className="likes-page-container">
      {/* Ant D sidebar */}
      <SideBar />

      {/* Likes Pge */}
      <div className="likes-page-right">
        <div className="likes-page-mid">
          <h1>My Likes</h1>
        </div>

        {/* Display trending posts */}
        <div className="trends">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default MyLikes;
