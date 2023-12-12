import React from "react";
import "./PostCard.scss";
import PostModel from "../../models/PostModel";

interface PostCardProps {
  post: PostModel;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const {
    owner,
    date,
    location,
    content,
    likes,
    bookmarks,
    isOwner,
    comments,
    tags,
  } = post;

  return (
    <div className="post-card">
      <div className="post-image">
        <div>
          <img src={owner.photo} alt={owner.name} />
        </div>
        <div
          style={{
            padding: "0 10px",
            width: "100%",
          }}
        >
          <div className="owner-info">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <p className="owner-name"> {"@" + owner.name} </p>
              <p className="post-location">
                <i className="fa-solid fa-location-dot"></i> {location}
              </p>
            </div>

            <p className="date-of-creation">
              {date}
              {isOwner && (
                <>
                  <span>
                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                  </span>
                  <span style={{ color: "red" }}>
                    <i className="fa-regular fa-trash-can"></i>{" "}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="post-content">{content}</div>

      <div className="post-tags">
        {tags.length ? tags.map((tag, idx) => <span key={idx}> {tag}</span>) : <></>}
      </div>

      <div className="post-actions">
        <div className="like-button">
          <p>Like </p>
          <div className="heart-bg">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="cnt">{likes}</div>
        </div>

        <div className="bookmark-button">
          <p>Save </p>
          <div className="bookmark-bg">
            <i className="fa-regular fa-bookmark"></i>
          </div>
          <div className="cnt">{bookmarks}</div>
        </div>

        <div className="comments-button">
          <p>Comments </p>
          <div className="comments-bg">
            <i className="fa-regular fa-comments"></i>
          </div>
          <div className="cnt">{comments.length}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
