import React from "react";

const PostGallery = () => {
  return (
    <div class="flex flex-col gap-2  rounded-lg shadow p-4">
      <div className="flex flex-row gap-2 items-center justify-between">
        <h3 class=" text-sm md:text-lg font-semibold">Intro</h3>
        <button class=" text-sm md:text-lg text-blue-400">See All Post</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <img src="https://picsum.photos/200" alt="" className=" rounded-md" />
        <img src="https://picsum.photos/200" alt="" className=" rounded-md" />
        <img src="https://picsum.photos/200" alt="" className=" rounded-md" />
        <img src="https://picsum.photos/200" alt="" className=" rounded-md" />
        <img src="https://picsum.photos/200" alt="" className=" rounded-md" />
        <img src="https://picsum.photos/200" alt="" className=" rounded-md" />
      </div>
    </div>
  );
};

export default PostGallery;
