import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import { assets } from "../assets/assets";
import { TfiLocationPin } from "react-icons/tfi";
import kConvert from "k-convert";

const JobApplication = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return jobData ? (
    <div className="container min-h-screen flex flex-col mt-5  py-10 px-5   rounded-sm  mx-auto  2xl:px-20">
      <div className="bg-white text-black rounded-lg w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between  gap-8 px-11 py-20 mb-7 bg-sky-100 border border-sky-500 rounded-xl ">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={jobData.companyId.image}
              alt="company logo"
              className="h-[92px] bg-white rounded-md p-4 ring-1  ring-gray-300 mr-4 max-md:mb-4  border "
            />
            <div className="text-center md:text-left text-gray-700">
              <h1 className="text-2xl sm:text-3xl font-medium">
                {jobData.title}
              </h1>
              <div className="flex flex-row flex-wrap items-center max-md:justify-center gap-y-2 text-gray-600 mt-2 gap-2 ">
                <span className="flex items-center gap-1">
                  <img src={assets.suitcase_icon} alt="" />
                  {jobData.companyId.name}
                </span>
                <span className="flex items-center gap-1 ">
                  <img src={assets.location_icon} alt="" />
                  {jobData.location}
                </span>
                <span className="flex items-center gap-1 ">
                  <img src={assets.person_icon} alt="" />
                  {jobData.level}
                </span>
                <span className="flex items-center gap-1 ">
                  <img src={assets.money_icon} alt="" />
                  CTC:${kConvert.convertTo(jobData.salary)}
                </span>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-blue-500 px-10 py-2 text-white rounded-md border ">
              Apply Now
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start ">
          <div className="w-full lg:w-2/3">
            <h2 className="font-semibold text-2xl mb-4 ">Job description</h2>
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: jobData.description }}
            ></div>
            <button className="bg-blue-500 px-10 py-2 mt-10 text-white rounded-md border ">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default JobApplication;
