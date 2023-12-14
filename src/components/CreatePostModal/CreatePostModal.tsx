import { FC, ChangeEvent, useEffect, useState } from "react";
import { Avatar } from "antd";
import gradientBG from "../../utils/GradientBG";
import "./CreatePostModal.scss"; // Add your CSS file for styling

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal: FC<CreatePostModalProps> = ({ isOpen, onClose }) => {
  const [postContent, setPostContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [publicPost, setPublicPost] = useState<boolean>(false);

  const makePostPublic = () => {
    setPublicPost(!publicPost);
  };

  const handleTagInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  useEffect(() => {
    console.log("object");
    const textarea = document.getElementById("postTextarea");
    if (textarea) {
      textarea.style.height = "40px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [isOpen, onClose, postContent]);

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
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="create-post-modal">
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
                <span className={publicPost ? "enabled-public" : ""}>
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
            <p style={{ cursor: "pointer", fontSize: 20 }}>
              <i className="fa-solid fa-xmark" onClick={onClose}></i>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePostModal;
