import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  return (
    <div className="grid grid-rows-[auto_auto_auto]">
      {/* Cover Image Section */}
      <div className="">
        <img
          src="https://picsum.photos/1280/240"
          alt="Cover Image"
          className="h-auto w-full object-cover md:h-64"
        />
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 place-items-center justify-items-center gap-x-4 gap-y-4 p-2 md:grid-cols-[1fr_1fr] md:gap-y-0">
        {/* Profile Image and Info Section */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-center">
          {/* Profile Image */}
          <img
            src="https://picsum.photos/170/170"
            alt="profile Image"
            className="-mt-11 h-24 w-24 rounded-full border-4 border-blue-600 md:h-48 md:w-48"
          />

          {/* Profile Info */}
          <div className="ml-0 flex flex-col items-center text-center md:ml-4 md:items-start md:text-left">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
              Softmint Software
            </h2>
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
              Solutions
            </h2>
            <div className="mt-2 flex flex-row gap-2 font-medium text-gray-600">
              <span>2.5K likes</span>
              <span>• 2.5K followers</span>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="grid grid-cols-3 gap-2 md:w-auto md:grid-cols-2">
          {/* Whatsapp button */}
          <div className="flex w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 p-2">
            <img
              src="/whatsapp.png"
              alt="Whatsapp"
              className="rounded-full w-[18px] h-[18px]"
            />
            <button className="text-xs font-medium text-white md:text-sm">
              Whatsapp
            </button>
          </div>
          {/* Messenger button */}
          <div className="flex w-auto items-center gap-2 rounded-lg bg-zinc-300 p-2">
            <img
              src="/messenger.png"
              alt="Messenger"
              className="rounded-full  w-[18px] h-[18px]"
            />
            <button className="text-xs font-medium text-black md:text-sm">
              Message
            </button>
          </div>
          {/* Like button */}
          <div className="flex w-auto items-center gap-3 rounded-lg bg-zinc-300 p-2">
            <img
              src="/like.jpg"
              alt="Like"
              className="rounded-full  w-[18px] h-[18px]"
            />
            <button className="text-xs font-medium text-black md:text-sm">
              Like
            </button>
          </div>
        </div>
      </div>

      <hr className="w-full border-[1px] border-gray-300 md:mt-2" />

      {/* Links Section */}
      <div className="grid grid-cols-[1fr_1fr] p-2 md:mt-2">
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
          <a href="#" className="text-xs font-medium md:text-base">
            Posts
          </a>
          <a href="#" className="text-xs font-medium md:text-base">
            About
          </a>
          <a href="#" className="text-xs font-medium md:text-base">
            Mention
          </a>
          <a href="#" className="text-xs font-medium md:text-base">
            Reviews
          </a>
          <a href="#" className="text-xs font-medium md:text-base">
            Followers
          </a>
          <a href="#" className="text-xs font-medium md:text-base">
            Photos
          </a>
          <a href="#" className="text-xs font-medium md:text-base">
            More
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <BsThreeDots className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
