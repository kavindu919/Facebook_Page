import React from "react";

const Searchbox = () => {
  return (
    <div class="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        class="flex-grow px-4 py-2 bg-slate-200 rounded-lg "
      />
    </div>
  );
};

export default Searchbox;
