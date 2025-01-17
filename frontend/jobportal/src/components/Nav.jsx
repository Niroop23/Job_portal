import React from "react";
import { assets } from "../assets/assets";
import { FaPhoenixFramework } from "react-icons/fa";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow py-4">
      <div className="container px-3 2xl:px-20 mx-auto flex justify-between items-center">
        <div className="flex gap-1 ">
          <FaPhoenixFramework size={40} />
          <span className="font-semibold text-3xl font-sans text-slate-800">
            NXTPATH
          </span>
        </div>
        {user ? (
          <div>
            <div className="flex gap-2  items-center ">
              <Link to={"/applications"}>Applied Jobs</Link>
              <p>|</p>
              <p>Hi, {user.firstName + " " + user.lastName}</p>
              <UserButton />
            </div>
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-400 text-white px-[6px] sm:px-9 py-2 rounded-2xl"
            >
              Login
            </button>
            <button className="text-gray-700">Employer Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
