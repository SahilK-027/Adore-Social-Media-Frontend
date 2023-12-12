import React, { useState, ChangeEvent, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";
import "./HomePage.scss";
import { Avatar } from "antd";
import AllPosts from "./Posts";
import PostCard from "../../components/PostCard/PostCard";

const gradientBG = [
  "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(180deg, #2af598 0%, #009efd 100%)",
  "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",
  "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
];

const HomePage: React.FC = () => {
  const [postContent, setPostContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [publicPost, setPublicPost] = useState<boolean>(false);

  const handleTagInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput && tags.length < 3 && !tags.includes(tagInput)) {
      let formattedTag = tagInput.trim();

      if (!formattedTag.startsWith("#")) {
        formattedTag = "#" + formattedTag;
      }
      setTags([...tags, formattedTag]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handlePostContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    console.log("Post Content:", postContent);
    console.log("Tags:", tags);
    setPostContent("");
    setTags([]);
  };

  useEffect(() => {
    console.log("object");
    const textarea = document.getElementById("postTextarea");
    if (textarea) {
      textarea.style.height = "40px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [postContent]);

  const makePostPublic = () => {
    const publicPostEle = document.getElementById("public-post-enable");

    if (publicPost) {
      publicPostEle?.classList.remove("enabled-public");
    } else {
      publicPostEle?.classList.add("enabled-public");
    }
    setPublicPost(!publicPost);
  };

  return (
    <div className="home-page-container">
      <SideBar />
      <div className="home-page-right">
        <div className="homepage-mid">
          <div className="posts-section-top">
            <div className="posts-for-you">Feed</div>
          </div>

          <div className="create-post-div">
            <div className="useravatar">
              <Avatar
                size={50}
                style={{
                  backgroundImage: gradientBG[7],
                }}
              >
                SK
              </Avatar>
            </div>
            <div className="post-text-input-holder" style={{ width: "100%" }}>
              <textarea
                id="postTextarea"
                placeholder="What's happening?!"
                value={postContent}
                onChange={handlePostContentChange}
                maxLength={200}
              ></textarea>

              <div onClick={makePostPublic} className="public-post">
                <span id="public-post-enable">
                  <i className="fa-solid fa-earth-africa"></i> Everyone can see
                </span>
              </div>

              <div className="tag-input-container">
                <input
                  type="text"
                  placeholder="Add tag (max 3)"
                  value={tagInput}
                  maxLength={14}
                  onChange={handleTagInputChange}
                />
                <button onClick={handleAddTag} disabled={tags.length === 3}>
                  Add Tag &nbsp; <i className="fa-solid fa-circle-plus"></i>
                </button>
              </div>

              <div className="selected-tags">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {tags.length ? (
                    tags.map((tag, index) => (
                      <div key={index} className="tag">
                        {tag}{" "}
                        <span onClick={() => handleRemoveTag(tag)}>
                          {" "}
                          <i className="fa-solid fa-circle-minus"></i>{" "}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p
                      style={{
                        margin: 0,
                        alignSelf: "center",
                        color: "#89898985",
                        fontWeight: "bold",
                      }}
                    >
                      Add some relevant tags...
                    </p>
                  )}
                </div>
                <div
                  style={{
                    justifySelf: "flex-end",
                  }}
                >
                  <button onClick={handlePostSubmit}>Post</button>
                </div>
              </div>
            </div>
          </div>

          <div className="all-posts">
            {AllPosts.map((post, idx) => (
              <PostCard key={idx} post={post} />
            ))}
          </div>
        </div>
        <div className="trends">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
