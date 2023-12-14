import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import "./HomePage.scss";
import AllPosts from "./Posts";
import PostCard from "../../components/PostCard/PostCard";
import CreatePost from "./CreatePost";

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      {/* Ant D sidebar */}
      <SideBar />

      {/* Homepage */}
      <div className="home-page-right">
        <div className="homepage-mid">
          <div className="posts-section-top">
            <div className="posts-for-you">Feed</div>
          </div>
          {/* Create new Post */}
          <CreatePost />

          {/* CDisplay All the posts */}
          <div className="all-posts">
            {AllPosts.map((post, idx) => (
              <PostCard key={idx} post={post} />
            ))}
          </div>
        </div>

        {/* CDisplay trending posts */}
        <div className="trends">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
