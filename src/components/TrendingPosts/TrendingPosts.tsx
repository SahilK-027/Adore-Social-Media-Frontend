import "./TrendingPosts.scss";

const TrendingPosts = () => {
  const topPosts = [
    {
      author: "@user1",
      message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["#lorem", "#ipsum"],
      likes: 25,
      time: "1 Nov 2023",
    },
    {
      author: "@user2",
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // tags: ["#tempor", "#labore"],
      likes: 18,
      time: "2 Nov 2023",
    },
    {
      author: "@user3",
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["#exercitation", "#commodo"],
      likes: 30,
      time: "3 Nov 2023",
    },
    {
      author: "@user4",
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tags: ["#reprehenderit", "#voluptate"],
      likes: 22,
      time: "4 Nov 2023",
    },
    {
      author: "@user5",
      message:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: ["#sint", "#occaecat"],
      likes: 15,
      time: "5 Nov 2023",
    },
    {
      author: "@user6",
      message:
        "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: ["#nulla", "#pariatur"],
      likes: 28,
      time: "6 Nov 2023",
    },
    {
      author: "@user7",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      tags: ["#perspiciatis", "#accusantium"],
      likes: 20,
      time: "7 Nov 2023",
    },
    {
      author: "@user8",
      message:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      tags: ["#voluptatem", "#aspernatur"],
      likes: 35,
      time: "8 Nov 2023",
    },
    {
      author: "@user9",
      message:
        "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      tags: ["#consectetur", "#adipisci"],
      likes: 17,
      time: "9 Nov 2023",
    },
    {
      author: "@user10",
      message:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      tags: ["#porro", "#quisquam"],
      likes: 23,
      time: "10 Nov 2023",
    },
  ];

  return (
    <div className="trending-posts">
      <h1>What’s happening...?</h1>
      <div className="post-item-container wrap">
        {topPosts.map((post, index) => (
          <div key={index} className="post-item wrap">
            <div className="post-author">
              {" "}
              <p>{post.author}</p>
              <p>{post.time}</p>{" "}
            </div>
            <div className="post-message wrap">{post.message}</div>
            <div className="post-tags wrap">
              {post.tags?.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag wrap">
                  {tag}
                </span>
              ))}
            </div>
            <div className="post-likes">Likes: {post.likes}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
