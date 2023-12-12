interface PostModel {
  id: number;
  owner: {
    name: string;
    photo: string;
  };
  date: string;
  location: string;
  content: string;
  likes: number;
  bookmarks: number;
  isOwner: boolean;
  tags: string[];
  comments: Comment[];
}

interface Comment {
  id: number;
  author: string;
  content: string;
}

export default PostModel;
