import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaRegShareSquare, FaWhatsapp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Post = () => {
  return (
    <div className="min-h-screen  p-4">
      {/* Post Container */}
      <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
        {/* User Information */}
        <div className="mb-3 flex items-center">
          <img
            src="https://picsum.photos/40/40"
            alt="Profile Image"
            className="mr-3 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Kavindu Jayakody</h3>
            <p className="text-sm text-gray-500">2 hrs ago</p>
          </div>
        </div>

        {/* Post Header */}
        <p className="mb-3">Had a great time</p>

        {/* Post Image */}
        <img
          src="https://picsum.photos/800/400"
          alt="Post image"
          className="mb-3 rounded-lg w-full h-auto"
        />
        <div className="flex flex-row gap-2 mb-2">
          <div className="flex gap-1 items-center justify-center">
            <AiOutlineLike className="text-xl" />
            <span>5</span>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <FcLike className="text-xl" />
            <span>5</span>
          </div>
        </div>
        <hr className="mt-1" />
        {/* Post Reaction Buttons */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-gray-600 mt-1">
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
        <hr className="mt-1" />
      </div>
    </div>
  );
};

export default Post;
