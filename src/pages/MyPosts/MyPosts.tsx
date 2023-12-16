import React from "react";
import { Table, Space } from "antd";
import "./MyPosts.scss";
import DemoPosts from "../MyProfilePage/DemoPosts";
import PostModel from "../../models/PostModel";
import SideBar from "../../components/SideBar/SideBar";
import TrendingPosts from "../../components/TrendingPosts/TrendingPosts";

interface MyPostsProps {}

const MyPosts: React.FC<MyPostsProps> = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Owner Info",
      key: "ownerDateLocation",
      render: (record: PostModel) => (
        <span>
          <strong>{record.owner.name}</strong>
          <br />
          {record.date} | {record.location}
        </span>
      ),
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <p>
            <i
              style={{ cursor: "pointer" }}
              className="fa-solid fa-pen-to-square"
            ></i>{" "}
          </p>
          <p style={{ color: "red" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa-regular fa-trash-can"
            ></i>{" "}
          </p>
        </Space>
      ),
    },
  ];

  return (
    <div className="posts-page-container">
      <SideBar />
      <div className="posts-page-right">
        <div className="posts-page-mid">
          <h1>My Posts</h1>
          <Table
            columns={columns}
            dataSource={DemoPosts}
            style={{ color: "red" }}
          />
        </div>
        <div className="trends">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
