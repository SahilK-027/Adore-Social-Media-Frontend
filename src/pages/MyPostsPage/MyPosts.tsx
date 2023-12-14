import SideBar from "../../components/SideBar/SideBar"
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts"
import "./MyPosts.scss"
const MyPosts = () => {
  return (
    <div className="posts-page-container">
    {/* Ant D sidebar */}
    <SideBar />

    {/* posts Pge */}
    <div className="posts-page-right">
      <div className="posts-page-mid">
        <h1>My posts</h1>
      </div>

      {/* Display trending posts */}
      <div className="trends">
        <TrendingPosts />
      </div>
    </div>
  </div>
  )
}

export default MyPosts
