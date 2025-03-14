import React from "react";
import { FaPhoenixFramework } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      <div className="shadow-md py-4 ">
        <div className="px-4 flex justify-between items-center ">
          <div className="flex justify-center items-center">
            <FaPhoenixFramework
              size={40}
              onClick={(e) => navigate("/")}
              className="cursor-pointer max-sm:w-28"
            />
            <span className="font-semibold text-3xl font-sans text-slate-800">
              NXTPATH
            </span>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="max-sm:hidden">Welcome back!!</p>
            <div className="relative group">
              <img
                className="w-9 p-0.5 border rounded-full"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10  pt-[50px]">
                <ul className="list-none m-0 p-2 bg-zinc-200 rounded-md text-sm">
                  <li className="  py-1 px-2 cursor-pointer pr-8">Account</li>
                  <li className="py-1 px-2 cursor-pointer pr-8">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        {/**left bar */}
        <div className=" border border-r-2  min-h-screen ">
          <ul className="flex flex-col  items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center w-full p-3 sm:px-6 gap-2 hover:bg-zinc-100 ${
                  isActive && "bg-zinc-300 border-r-4 border-slate-500"
                } `
              }
              to={"/dashboard/manage-jobs"}
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center w-full p-3 sm:px-6 gap-2 hover:bg-zinc-100 ${
                  isActive && "bg-zinc-300 border-r-4 border-slate-500"
                } `
              }
              to={"/dashboard/add-job"}
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center w-full p-3 sm:px-6 gap-2 hover:bg-zinc-100 ${
                  isActive && "bg-zinc-300 border-r-4 border-slate-500"
                } `
              }
              to={"/dashboard/view-applications"}
            >
              <img className="min-w-4" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
