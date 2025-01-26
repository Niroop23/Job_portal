import React from "react";
import { assets } from "../assets/assets";

const PlayStore = () => {
  return (
    <div className="container px-5 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-violet-100 to-purple-100 text-black px-10 py-[60px] lg:p-[120px]   rounded-lg ">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 max-w-md  ">
            Download the Mobile App for various Features
          </h1>
          <div className="flex  gap-4">
            <a href="" className="cursor-pointer inline-block">
              <img
                className="h-12"
                src={assets.play_store}
                alt="playstore_icon"
              />
            </a>
            <a href="" className="cursor-pointer inline-block">
              <img src={assets.app_store} alt="appstore" />
            </a>
          </div>
        </div>
        <img
          className="absolute w-80 right-0 bottom-3 top-3 mr-[120px] max-lg:hidden "
          src={assets.app_main_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default PlayStore;
