import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const ManageJobs = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-4 max-w-5xl">
      <main className="overflow-auto">
        <table className="min-w-full bg-white border border-zinc-200 max-sm:text-small">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 border-b text-left">Job Title</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden ">
                Date
              </th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-2 px-4 border-b text-center">Applicants</th>
              <th className="py-2 px-4 border-b text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className=" text-gray-700 odd:bg-gray-100 even:bg-white"
              >
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b ">{job.title}</td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {job.location}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {job.applicants}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="bg-[#2b2929da] text-[gainsboro] py-2 px-4 rounded-md  "
        >
          Add new Job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
