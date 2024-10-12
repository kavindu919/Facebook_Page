import React from "react";
import { VscSettings } from "react-icons/vsc";

const PostFilter = () => {
  return (
    <div class="flex flex-row items-center justify-between  rounded-lg shadow p-4">
      <h3 class=" text-sm md:text-lg font-semibold">Posts</h3>
      <button className="flex flex-row items-center gap-3 bg-zinc-300 p-2 rounded ">
        <VscSettings />
        Filter
      </button>
    </div>
  );
};

export default PostFilter;
