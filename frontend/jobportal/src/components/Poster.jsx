import React from "react";
import { assets } from "../assets/assets";
import { CiSearch } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";

const Poster = () => {
  return (
    <div className="container 2xl:px-18 mx-auto my-10 ">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-[60px] text-center mx-2 rounded-[12px] ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 ">
          Over 10,000+ job opportunities
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-sm font-light px-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          eligendi repudiandae nemo
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto  ">
          <div className="flex items-center">
            <CiSearch size={20} className="h-4 sm:h-5 " />

            <input
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2 rounded-sm outline-none w-full"
            />
          </div>
          <div className="flex items-center">
            <TfiLocationPin size={20} className="h-4 sm:h-5 " />
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded-sm outline-none w-full"
            />
          </div>
          <button className="bg-blue-500 px-4 py-2 text-white m-[3px] rounded">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
