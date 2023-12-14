import { Avatar } from "antd";
import SideBar from "../../components/SideBar/SideBar";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import "./MyProfile.scss";
import gradientBG from "../../utils/GradientBG";
import DemoPosts from "./DemoPosts";
import PostCard from "../../components/PostCard/PostCard";
import EditProfile from "./EditProfile";
import { useState } from "react";
const MyProfile = () => {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);

  const handleEditProfileClose = () => {
    setEditProfileOpen(false);
  };
  return (
    <div className="profile-page-container">
      {/* Ant D sidebar */}
      <SideBar />

      {/* profile Page */}
      <div className="profile-page-right">
        <div className="profile-page-mid">
          <h1>My profile</h1>
          <div className="profile-photo">
            <Avatar
              size={100}
              style={{
                backgroundImage: gradientBG[7],
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              SK
            </Avatar>

            <button onClick={() => setEditProfileOpen(true)}>
              Edit Profile
            </button>
          </div>
          <h2>Sayali Kandhare</h2>
          <p className="sub-text">@SayaliKand95658</p>
          <p>
            I AM LEARNING...nvsfj bfuhgbuhrkt fbunrdtiuhruthi urtjoritfgnsurtdgl
            krtgrtuer turtglkrut hkgjdrtfn uhrstdkugkr tugjlrksutu
            rdfhtgurhdtligk hrksdtuguir stjgliurhtdgk
          </p>
          <p
            style={{
              borderBottom: "1px solid #e6e6e6",
              paddingBottom: "10px",
            }}
            className="sub-text"
          >
            <i className="fa-solid fa-location-dot"></i>
            &nbsp;India &nbsp;
            <i className="fa-regular fa-calendar-days"></i>
            &nbsp;Joined December 2023
          </p>
          <div className="my-post-title-container">
            <h3>My Posts</h3>
          </div>
          <div>
            {DemoPosts.length ? (
              DemoPosts.map((post, idx) => <PostCard key={idx} post={post} />)
            ) : (
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "50px",
                }}
              >
                <h1
                  style={{ fontSize: 32, fontWeight: 800, paddingBottom: 10 }}
                >
                  You don’t have any likes yet
                </h1>
                <p>
                  Tap the heart on any post to show it some love. When you do,
                  it’ll show up here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Display trending posts */}
        <div className="trends">
          <TrendingPosts />
        </div>
      </div>

      <EditProfile
        isOpen={isEditProfileOpen}
        onClose={handleEditProfileClose}
      />
    </div>
  );
};

export default MyProfile;
