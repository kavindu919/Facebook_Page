// import React from "react";
// import { FaFacebook } from "react-icons/fa6";
// import Searchbox from "./Searchbox";
// import { GrHomeRounded } from "react-icons/gr";
// import { MdOutlinePeopleAlt } from "react-icons/md";
// import { MdOndemandVideo } from "react-icons/md";
// import { IoStorefrontOutline } from "react-icons/io5";
// import { IoPeopleCircleOutline } from "react-icons/io5";
// import { CgMenuRound } from "react-icons/cg";
// import { FaFacebookMessenger } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <div className="flex flex-row p-3 items-center justify-between">
//       <div className="flex items-center justify-center gap-3">
//         <FaFacebook className="text-6xl" />
//         <Searchbox />
//       </div>
//       <div className="flex items-center justify-center gap-16">
//         <GrHomeRounded className="text-xl" />
//         <MdOutlinePeopleAlt className="text-2xl" />
//         <MdOndemandVideo className="text-2xl" />
//         <IoStorefrontOutline className="text-2xl" />
//         <IoPeopleCircleOutline className="text-2xl" />
//       </div>
//       <div className="flex items-center justify-center gap-4">
//         <CgMenuRound className="text-2xl" />
//         <FaFacebookMessenger className="text-2xl" />
//         <IoIosNotifications className="text-2xl" />
//         <FaUserCircle className="text-2xl" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import Searchbox from "./Searchbox";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { CgMenuRound } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row p-3 items-center justify-between sticky top-0 bg-white">
      {/* Left Section (Logo + Searchbox) */}
      <div className="flex items-center justify-center gap-3">
        <FaFacebook className="text-6xl" />
        <Searchbox />
      </div>

      {/* Middle Section (Icons) - Hidden on small screens */}
      <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-12 xl:space-x-16">
        <GrHomeRounded className="text-xl" />
        <MdOutlinePeopleAlt className="text-2xl" />
        <MdOndemandVideo className="text-2xl" />
        <IoStorefrontOutline className="text-2xl" />
        <IoPeopleCircleOutline className="text-2xl" />
      </div>

      {/* Right Section (Menu, Messenger, Notifications, Profile) */}
      <div className="flex items-center justify-center gap-4">
        <CgMenuRound className="text-2xl" />
        <FaFacebookMessenger className="text-2xl" />
        <IoIosNotifications className="text-2xl" />
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
