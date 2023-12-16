interface PostModel {
  id: number;
  owner: {
    name: string;
    photo: number;
  };
  date: string;
  location: string;
  content: string;
  likes: number;
  bookmarks: number;
  isOwner: boolean;
  tags: string[];
  comments: CommentModel[];
}

export interface CommentModel {
  id: number;
  author: string;
  content: string;
}

export default PostModel;
