import PostCard from "../../components/PostCard/PostCard";
import SideBar from "../../components/SideBar/SideBar";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import BookmarkPosts from "./DemoBookmarks";
import "./MyBookMarks.scss";

const MyBookMarks = () => {
  return (
    <div className="bookmark-page-container">
      {/* Ant D sidebar */}
      <SideBar />

      {/* bookmark Pge */}
      <div className="bookmark-page-right">
        <div className="bookmark-page-mid">
          <h1>Bookmarks</h1>
          <p>@sayalikandhare</p>

          {BookmarkPosts.length ? (
            BookmarkPosts.map((post, idx) => <PostCard key={idx} post={post} />)
          ) : (
            <div style={{
              textAlign: 'center',
              paddingTop: '50px',
            }}>
              <h1 style={{fontSize: 32, fontWeight: 800, paddingBottom: 10}}>Save posts for late</h1>
              <p>Bookmark posts to easily find them again in the future.</p>
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

export default MyBookMarks;
