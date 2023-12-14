import PostCard from "../../components/PostCard/PostCard";
import SideBar from "../../components/SideBar/SideBar";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import LikedPosts from "./DemoLikes";
import "./MyLikes.scss";

const MyLikes = () => {
  return (
    <div className="likes-page-container">
      {/* Ant D sidebar */}
      <SideBar />

      {/* Likes Pge */}
      <div className="likes-page-right">
        <div className="likes-page-mid">
          <h1>Likes</h1>
          <p>@sayalikandhare</p>

          {LikedPosts.length ? (
            LikedPosts.map((post, idx) => <PostCard key={idx} post={post} />)
          ) : (
            <div
              style={{
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              <h1 style={{ fontSize: 32, fontWeight: 800, paddingBottom: 10 }}>
                You don’t have any likes yet
              </h1>
              <p>
                Tap the heart on any post to show it some love. When you do,
                it’ll show up here.
              </p>
            </div>
          )}
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
