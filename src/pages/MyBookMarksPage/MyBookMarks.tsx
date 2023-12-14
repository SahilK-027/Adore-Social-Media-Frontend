import SideBar from "../../components/SideBar/SideBar";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import "./MyBookMarks.scss";

const MyBookMarks = () => {
  return (
    <div className="bookmark-page-container">
      {/* Ant D sidebar */}
      <SideBar />

      {/* bookmark Pge */}
      <div className="bookmark-page-right">
        <div className="bookmark-page-mid">
          <h1>My bookmark</h1>
        </div>

        {/* Display trending posts */}
        <div className="trends">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default MyBookMarks;
