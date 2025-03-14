import React from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApplication = () => {
  return (
    <div className="container mx-auto p-4">
      <main>
        <table className="w-full max-w-4xl   ring-2 ring-zinc-200 max-sm:text-sm">
          <thead>
            <tr className="border-b-2">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Username</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 text-left">Resume</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((application, index) => (
              <tr
                key={index}
                className=" text-gray-700 odd:bg-gray-100 even:bg-white"
              >
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-2 px-4 border-b ">
                  <div className="flex text-center items-center">
                    <img
                      className="w-12 h-12  rounded max-sm:hidden mr-3"
                      src={application.imgSrc}
                      alt="applicant_img"
                    />
                    <span>{application.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {application.jobTitle}
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {application.location}
                </td>
                <td className="py-2 px-4 border-b  ">
                  <a
                    className="active:text-black  bg-sky-200 px-3 py-1 rounded inline-flex  hover:text-gray-700 hover:bg-sky-300 hover:scale-105 transition-all ease-in-out duration-300 "
                    href=""
                    target="_blank"
                  >
                    Resume
                    <img
                      className="ml-1 "
                      src={assets.resume_download_icon}
                      alt="download_icon"
                    />
                  </a>
                </td>
                <td className="px-4 py-2 border-b relative">
                  <div className="relative inline-block  text-left group">
                    <button className="text-gray-600  action-button">
                      ...
                    </button>
                    <div
                      className="z-10 
                              absolute right-0 top-0 md:left-0
                            bg-white w-32 border-zinc-300 rounded shadow mt-3
                              opacity-0  scale-95  hover:pointer-events-auto
                              transition-all delay-200 duration-300 ease-in
                              group-hover:opacity-100 group-hover:scale-100" /*"z-10 hidden absolute right-0 top-0 md:left-0
                    bg-white w-32 border-zinc-300 rounded shadow  mt-3 group-hover:block transition-all ease-in-out duration-300 delay-300"*/
                    >
                      <button className="block w-full text-left px-4 py-2 text-green-600 hover:text-green-700 hover:bg-zinc-100">
                        Accept
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-[#d12d2de0] hover:text-red-700 hover:bg-zinc-100">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ViewApplication;
