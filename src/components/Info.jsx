import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaDirections } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export const Info = () => {
  return (
    <div class="flex flex-col gap-2  rounded-lg shadow p-4">
      <h3 class=" text-sm md:text-lg font-semibold">Intro</h3>
      <p className="text-sm md:text-base">
        We are a boutique digital transformation consultancy and software
        development company that provides c
      </p>
      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-row gap-2 items-center justify-center">
          <CiCircleInfo className=" text-lg" />
          <span className="text-sm md:text-base"> Software company</span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <FaDirections className=" text-lg" />
          <span className="text-sm md:text-base">
            No 310/1/1, Kaduwela Road, Koswatte Junction, Battaramulla, Sri
            Lanka
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <IoMdCall className=" text-lg" />
          <span className="text-sm md:text-base">077 726 1026</span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <MdOutlineEmail className=" text-lg" />
          <span className="text-sm md:text-base">hello@softmint.net</span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <CiGlobe className=" text-lg" />
          <span className="text-sm md:text-base">softmint.net</span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <MdAccessTimeFilled className=" text-lg" />
          <span className="text-sm md:text-base">
            <select name="" id="">
              <option value="">Always Open</option>
            </select>
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <FaStar className=" text-lg" />
          <span className="text-sm md:text-base">
            Not yet rated (0 reviews)﻿
          </span>
        </div>
      </div>
    </div>
  );
};
