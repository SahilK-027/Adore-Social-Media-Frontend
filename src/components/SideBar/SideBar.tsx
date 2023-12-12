// Sidebar.tsx
import React, { useEffect, useState } from "react";
import ProLayout, { MenuDataItem } from "@ant-design/pro-layout";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Menu } from "antd";
import "./SideBar.scss";
import logo from "../../assets/icon.svg";

const menuData: MenuDataItem[] = [
  {
    path: "/home",
    name: "Home",
    icon: <i className="icon fa-solid fa-house"></i>,
  },
  {
    path: "/my-likes",
    name: "My Likes",
    icon: <i className="icon fa-regular fa-heart"></i>,
  },
  {
    path: "/my-bookmarks",
    name: "My Bookmarks",
    icon: <i className="icon fa-regular fa-bookmark"></i>,
  },
  {
    path: "/my-posts",
    name: "My Posts",
    icon: <i className="icon fa-solid fa-quote-right"></i>,
  },
  {
    path: "/my-profile",
    name: "My Profile",
    icon: <i className="icon fa-solid fa-user"></i>,
  },
];

const SideBar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const menuItemRender = (item: MenuDataItem) => (
    <Menu.Item key={item.path}>
      {
        <Link to={item.path || "/"}>
          {item.icon} {!collapsed && item.name}
        </Link>
      }
    </Menu.Item>
  );

  return (
    <ProLayout
      location={{
        pathname: location.pathname,
      }}
      menuHeaderRender={() => (
        <div className="sidebar-brand">
          <div className="brand-logo">
            <img src={logo} alt="logo" width={30} height={30} />
            {mobile ? (
              <h1 className="brand-name">Adore</h1>
            ) : (
              !collapsed && <h1 className="brand-name">Adore</h1>
            )}
          </div>
        </div>
      )}
      menuDataRender={() => menuData}
      menuItemRender={menuItemRender}
      collapsed={collapsed}
      onCollapse={handleCollapse}
      className={collapsed ? "collapsed-sidebar" : ""}
      menuFooterRender={() => (
        <div className="sidebar-footer">
          <div className="user-avatar">
            <div>
              <Avatar size={50} style={{ backgroundColor: "#87d068" }}>
                SK
              </Avatar>
            </div>
            {!collapsed && (
              <div>
                <p
                  style={{
                    fontSize: 16,
                    marginBottom: 3,
                  }}
                >
                  Logged in as:{" "}
                </p>
                <p className="userName">@sayalikandhare</p>
              </div>
            )}
          </div>
          <button className="primary-button create-post-btn">
            {collapsed && <i className="fa-solid fa-right-from-bracket"></i>}
            {!collapsed && <span> Log out</span>}
          </button>
        </div>
      )}
    />
  );
};

export default SideBar;
