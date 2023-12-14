import SideBar from "../../components/SideBar/SideBar"
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts"
import "./MyProfile.scss"
const MyProfile = () => {
  return (
    <div className="profile-page-container">
    {/* Ant D sidebar */}
    <SideBar />

    {/* profile Page */}
    <div className="profile-page-right">
      <div className="profile-page-mid">
        <h1>My profile</h1>
      </div>

      {/* Display trending posts */}
      <div className="trends">
        <TrendingPosts />
      </div>
    </div>
  </div>
  )
}

export default MyProfile
