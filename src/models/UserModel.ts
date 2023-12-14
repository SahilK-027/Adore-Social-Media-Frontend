import PostModel from "./PostModel";

interface TwitterUser {
  username: string;
  email: string;
  password: string;
  bio?: string;
  joiningDate: Date;
  posts: PostModel[];
  likedPosts: PostModel[];
  bookmarks: PostModel[];
}

export default TwitterUser;
