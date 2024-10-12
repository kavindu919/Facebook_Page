import React from "react";

const Featured = () => {
  return (
    <div class="flex flex-col gap-2  rounded-lg shadow p-4">
      <h3 class=" text-sm md:text-lg font-semibold">Featured</h3>

      {/* Post Container */}
      <div className="mb-4 rounded-lg bg-white p-4 ">
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
      </div>
    </div>
  );
};

export default Featured;
