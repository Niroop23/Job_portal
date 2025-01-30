import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListings = () => {
  const { isSearchInput, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showFilter, setShowFilter] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleCategoryFilter = (category) => {
    setCategoryFilter((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleLocationFilter = (location) => {
    setLocationFilter((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  useEffect(() => {
    const filterByCategory = (job) =>
      categoryFilter.length === 0 || categoryFilter.includes(job.category);

    const filterByLocation = (job) =>
      locationFilter.length === 0 || locationFilter.includes(job.location);

    const matchesTitle = (job) =>
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

    const matchesLocation = (job) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          filterByCategory(job) &&
          filterByLocation(job) &&
          matchesTitle(job) &&
          matchesLocation(job)
      );

    setFilteredJobs(newFilteredJobs);
    setCurrPage(1);
  }, [jobs, categoryFilter, locationFilter, searchFilter]);

  return (
    <>
      <div className="container 2xl:px-16 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 gap-10  ">
        {/**side bar */}
        <div className="w-full lg:w-1/4 bg-white px-4  ">
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
          <button
            onClick={(e) => setShowFilter((prev) => !prev)}
            className="px-6 py-1.5 border border-gray-400 rounded lg:hidden "
          >
            {showFilter ? "close" : "Filters"}
          </button>
          {/**category filter */}
          <section className={showFilter ? "" : "max-lg:hidden"}>
            <div>
              <h4 className="font-medium text-md py-4">Search By Categories</h4>
              <ul className="space-y-3 text-gray-600">
                {JobCategories.map((category, index) => (
                  <li className="flex items-center gap-3 " key={index}>
                    <input
                      onChange={() => handleCategoryFilter(category)}
                      className="scale-125"
                      type="checkbox"
                      checked={categoryFilter.includes(category)}
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
                      onChange={() => handleLocationFilter(location)}
                      checked={locationFilter.includes(location)}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
            {filteredJobs
              .slice((currPage - 1) * 6, currPage * 6)
              .map((job, index) => {
                return <JobCard job={job} key={index} />;
              })}
          </div>

          {/**pagination */}
          {filteredJobs.length > 0 && (
            <div className="flex items-center justify-center space-x-5 mb-8 select-none">
              <a href="#job-card">
                <img
                  src={assets.left_arrow_icon}
                  alt="left_arrow"
                  onClick={() => setCurrPage(Math.max(currPage - 1, 1))}
                />
              </a>
              {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map(
                (_, index) => (
                  <a href="#job-card" key={index}>
                    <button
                      className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                        currPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() => setCurrPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </a>
                )
              )}
              <a href="#job-card">
                <img
                  src={assets.right_arrow_icon}
                  alt="right_arrow"
                  onClick={() => {
                    if (currPage < Math.ceil(filteredJobs.length / 6))
                      setCurrPage(currPage + 1);
                  }}
                />
              </a>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default JobListings;
