import PostModel from "../../models/PostModel";

const BookmarkPosts: PostModel[] = [
  {
    id: 1,
    owner: {
      name: "John Doe",
      photo: 0,
    },
    date: "2023-04-01",
    location: "India",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 10,
    bookmarks: 5,
    isOwner: true,
    tags: ["#hello", "#world"],
    comments: [
      { id: 1, author: "Alice", content: "Great post!" },
      { id: 2, author: "Bob", content: "I agree!" },
    ],
  },
  {
    id: 2,
    owner: {
      name: "Jane Smith",
      photo: 1,
    },
    date: "2023-04-02",
    location: "USA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 15,
    bookmarks: 7,
    isOwner: false,
    tags: [],
    comments: [
      { id: 1, author: "Charlie", content: "Nice one!" },
      { id: 2, author: "David", content: "I learned something new!" },
    ],
  },
  {
    id: 3,
    owner: {
      name: "Alice Johnson",
      photo: 2,
    },
    date: "2023-04-03",
    location: "Canada",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 20,
    bookmarks: 8,
    isOwner: false,
    tags: ["#hello", "#world"],
    comments: [
      { id: 1, author: "Bob", content: "Amazing pictures!" },
      { id: 2, author: "Charlie", content: "I wish I was there!" },
    ],
  },
  {
    id: 4,
    owner: {
      name: "Eva Martinez",
      photo: 3,
    },
    date: "2023-04-04",
    location: "Spain",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 12,
    bookmarks: 4,
    isOwner: false,
    tags: ["#hello", "#world"],
    comments: [
      { id: 1, author: "David", content: "Looks delicious!" },
      { id: 2, author: "Alice", content: "Share the recipe please!" },
    ],
  },
  {
    id: 5,
    owner: {
      name: "Alex Wang",
      photo: 4,
    },
    date: "2023-04-05",
    location: "China",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 25,
    bookmarks: 10,
    isOwner: false,
    tags: ["#hello", "#world"],
    comments: [
      { id: 1, author: "Charlie", content: "Keep up the good work!" },
      { id: 2, author: "Bob", content: "What language are you using?" },
    ],
  },
  {
    id: 6,
    owner: {
      name: "Sophie Lee",
      photo: 5,
    },
    date: "2023-04-06",
    location: "South Korea",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 18,
    bookmarks: 6,
    isOwner: false,
    tags: ["#hello", "#world"],
    comments: [
      { id: 1, author: "David", content: "Wish I could join you!" },
      { id: 2, author: "Alice", content: "What a serene place!" },
    ],
  },
  {
    id: 7,
    owner: {
      name: "Mmd Ahmed",
      photo: 6,
    },
    date: "2023-04-07",
    location: "Egypt",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 30,
    bookmarks: 15,
    isOwner: true,
    tags: ["#hello", "#world"],
    comments: [
      { id: 1, author: "Alex", content: "Incredible photos!" },
      { id: 2, author: "Sophie", content: "Tell us more about the history." },
    ],
  },
  {
    id: 8,
    owner: {
      name: "Luis Fernandez",
      photo: 7,
    },
    date: "2023-04-08",
    location: "Brazil",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 22,
    bookmarks: 9,
    isOwner: false,
    tags: ["#hello", "#world"],
    comments: [
      { id: 1, author: "Eva", content: "Cheering for the team!" },
      { id: 2, author: "Alice", content: "Who's your favorite player?" },
    ],
  },
  {
    id: 9,
    owner: {
      name: "Maria Rodriguez",
      photo: 8,
    },
    date: "2023-04-09",
    location: "Mexico",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 17,
    bookmarks: 7,
    isOwner: false,
    tags: ["#hello", "#world"],
    comments: [
      { id: 1, author: "Sophie", content: "Happy birthday to your friend!" },
      { id: 2, author: "David", content: "Wishing them joy and happiness!" },
    ],
  },
  {
    id: 10,
    owner: {
      name: "Yuki Tanaka",
      photo: 9,
    },
    date: "2023-04-10",
    location: "Japan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 28,
    bookmarks: 12,
    isOwner: false,
    tags: [],
    comments: [
      { id: 1, author: "Alice", content: "Sakura season is magical!" },
      { id: 2, author: "Alex", content: "I hope to visit Japan someday." },
    ],
  },
];

export default BookmarkPosts;
