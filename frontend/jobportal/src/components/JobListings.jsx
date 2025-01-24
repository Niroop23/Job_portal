import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  assets,
  JobCategories,
  JobLocations,
  jobsData,
} from "../assets/assets";
import JobCard from "./JobCard";

const JobListings = () => {
  const { isSearchInput, searchFilter, setSearchFilter } =
    useContext(AppContext);

  return (
    <>
      <div className="container 2xl:px-16 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 gap-10  py-9 ">
        {/**side bar */}
        <div className="w-full lg:w-1/4 bg-white px-4 ">
          {isSearchInput &&
            (searchFilter.title !== "" || searchFilter.location !== "") && (
              <>
                <h3 className="font-Outfit text-xl font-medium mb-3">
                  Current Search
                </h3>
                <div className="mt-3 select-none mb-3 ">
                  <div className="flex flex-row gap-4">
                    {searchFilter.title && (
                      <span className="inline-flex flex-row gap-2 border-0 ring-2 bg-[#EFF5FF] ring-[#8BC3FF] text-gray-400 rounded  px-4 py-[4px]  ">
                        {searchFilter.title}
                        <img
                          onClick={(e) =>
                            setSearchFilter((prev) => ({
                              ...prev,
                              title: "",
                            }))
                          }
                          className="cursor-pointer"
                          src={assets.cross_icon}
                          alt="cross_icon"
                        />
                      </span>
                    )}
                    {searchFilter.location && (
                      <span className="inline-flex flex-row gap-2 border-0 ring-2 bg-[#FFF5F3] ring-[#FFBABA] text-gray-400 rounded  px-4 py-[4px] ">
                        {searchFilter.location}
                        <img
                          onClick={(e) =>
                            setSearchFilter((prev) => ({
                              ...prev,
                              location: "",
                            }))
                          }
                          className="cursor-pointer"
                          src={assets.cross_icon}
                          alt="cross_icon"
                        />
                      </span>
                    )}
                  </div>
                </div>
              </>
            )}
          {/**category filter */}
          <section className="max-lg:hidden ">
            <div>
              <h4 className="font-medium text-md py-4">Search By Categories</h4>
              <ul className="space-y-3 text-gray-600">
                {JobCategories.map((category, index) => (
                  <li className="flex items-center gap-3 " key={index}>
                    <input
                      className="scale-125"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            {/**location */}
            <div>
              <h4 className="font-medium text-md py-4 pt-12">
                Search By Location
              </h4>
              <ul className="space-y-3 text-gray-600">
                {JobLocations.map((location, index) => (
                  <li className="flex items-center gap-3 " key={index}>
                    <input
                      className="scale-125"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        {/**main content */}
        <main className="w-full text-gray-700 lg:w-3/4 max-lg:px-4">
          <h3 className="font-medium text-2xl py-2" id="job-card">
            Jobs
          </h3>
          <p className="mb-8">Get your dream job from your dream companies</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {jobsData.map((job, index) => {
              return <JobCard job={job} key={index} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default JobListings;
