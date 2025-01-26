import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { CiSearch } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { AppContext } from "../context/AppContext";

const Poster = () => {
  const { setIsSearchInput, setSearchFilter } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });

    setIsSearchInput(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
  };

  const onClear = () => {
    titleRef.current.value = "";
    locationRef.current.value = "";
    setSearchFilter({
      title: "",
      location: "",
    });

    setIsSearchInput(false);
    console.log("input fields cleared");
  };

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
              ref={titleRef}
            />
          </div>
          <div className="flex items-center">
            <TfiLocationPin size={20} className="h-4 sm:h-5 " />
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded-sm outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-500 px-4 py-2 text-white m-[3px] rounded"
          >
            Search
          </button>
          <img
            src="./src/assets/clear_icon.svg"
            onClick={onClear}
            className="h-6 px-2 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded ">
        <div className="flex justify-center gap-9 lg:gap-14 flex-wrap ">
          <p className="font-medium">Affiliated with</p>
          <img
            className="h-6"
            src={assets.microsoft_logo}
            alt="microsoft_logo"
          />
          <img className="h-6" src={assets.amazon_logo} alt="amazon_logo" />

          <img className="h-6" src={assets.walmart_logo} alt="walmart_logo" />
          <img className="h-6" src={assets.samsung_logo} alt="samsung_logo" />
          <img className="h-6" src={assets.adobe_logo} alt="adobe_logo" />
        </div>
      </div>
    </div>
  );
};

export default Poster;
