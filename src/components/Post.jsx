import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaRegShareSquare, FaWhatsapp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaRegCircleUser } from "react-icons/fa6";

const postsData = [
  {
    id: 1,
    userName: "Kavindu Jayakody",
    timeAgo: "2 hrs ago",
    content: "Had a great time",
    postImage: "https://picsum.photos/800/400",
    likeCount: 5,
    loveCount: 5,
  },
  {
    id: 2,
    userName: "Jane Doe",
    timeAgo: "1 day ago",
    content: "Beautiful sunset!",
    postImage: "https://picsum.photos/800/401",
    likeCount: 8,
    loveCount: 12,
  },
  {
    id: 3,
    userName: "John Smith",
    timeAgo: "3 days ago",
    content: "Hiking was amazing!",
    postImage: "https://picsum.photos/800/402",
    likeCount: 10,
    loveCount: 20,
  },
];

const Post = ({ post }) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      {/* User Information */}
      <div className="mb-3 flex items-center">
        <img
          src="https://picsum.photos/40/40"
          alt="Profile Image"
          className="mr-3 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{post.userName}</h3>
          <p className="text-sm text-gray-500">{post.timeAgo}</p>
        </div>
      </div>

      {/* Post Header */}
      <p className="mb-3">{post.content}</p>

      {/* Post Image */}
      <img
        src={post.postImage}
        alt="Post image"
        className="mb-3 rounded-lg w-full h-auto"
      />

      {/* Reactions */}
      <div className="flex flex-row gap-2 mb-2">
        <div className="flex gap-1 items-center justify-center">
          <AiOutlineLike className="text-xl" />
          <span>{post.likeCount}</span>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <FcLike className="text-xl" />
          <span>{post.loveCount}</span>
        </div>
      </div>
      <hr className="mt-2" />

      {/* Post Reaction Buttons */}
      <div className="flex flex-wrap justify-between items-center gap-4 text-gray-600 mt-2">
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <AiOutlineLike className="text-xl" />
          <span className="text-sm">Like</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <FaRegComment className="text-xl" />
          <span className="text-sm">Comment</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <FaWhatsapp className="text-xl" />
          <span className="text-sm">Send</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <FaRegShareSquare className="text-xl" />
          <span className="text-sm">Share</span>
        </button>
      </div>
      <hr className="mt-2" />

      {/* Comment Section */}
      <div className="flex flex-row items-center mt-3 gap-3">
        <FaRegCircleUser className="text-2xl" />
        <input
          type="text"
          className="bg-slate-200 w-full rounded p-2"
          placeholder="Write Comment"
        />
      </div>
    </div>
  );
};

const PostList = () => {
  return (
    <div className="min-h-screen">
      {postsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
