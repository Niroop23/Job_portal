import React from "react";
import { FaPhoenixFramework } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div
        className="container px-4 2xl:px-16 mx-auto py-8
       flex gap-4 items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <FaPhoenixFramework size={35} className="text-black" />
          <span className="text-2xl font-semi-bold">NXTPATH</span>
        </div>
        <span className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
          Copyright @NXTPATH | All rights reserved.
        </span>
        <div className="flex gap-4 items-center">
          <img width={40} src={assets.facebook_icon} alt="" />
          <img width={40} src={assets.instagram_icon} alt="" />
          <img width={40} src={assets.twitter_icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
