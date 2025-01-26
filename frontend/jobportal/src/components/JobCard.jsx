import React from "react";
import { assets } from "../assets/assets";
import DOMPurify from "dompurify";

const JobCard = ({ job }) => {
  return (
    <div className="container border rounded p-5 shadow-lg  ">
      <div className="flex gap-1 justify-between items-center">
        <img className="h-10" src={assets.company_icon} alt="company icon" />
      </div>
      <h4 className="font-semibold text-lg mt-2 ">{job.title}</h4>
      <div className="flex items-center gap-2 mt-2 text-sm ">
        <span className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          {job.location}
        </span>
        <span className="bg-red-50 border border-red-200 px-3 py-1 rounded-full">
          {job.level}
        </span>
      </div>
      <p
        className="mt-3 text-sm text-gray-600 p-1 text-ellipsis line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(job.description.slice(0, 150)),
        }}
      ></p>
      <div className=" flex gap-4 mt-3 text-sm  ">
        <button className=" bg-blue-500 border-0 outline-0 px-3 py-[6px] ring-1 ring-blue-600  text-white rounded transform transition-transform duration-200 active:scale-95 hover:bg-blue-400 hover:ring-blue-500">
          Apply now
        </button>
        <button
          className="text-gray-500 border-0 outline-0 ring-1 ring-gray-400 px-3 py-[6px] rounded  hover:text-black active:scale-95 
        transform transition-transform duration-200"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
