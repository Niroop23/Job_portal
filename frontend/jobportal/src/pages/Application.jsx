import React from "react";
import Nav from "../components/Nav";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";

const Application = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [resume, setResume] = React.useState(null);

  return (
    <>
      <div className="container px-4 min-h-[70vh] mx-auto my-11 ">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-[26px] mt-3">
          {isEditing ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md mr-2 ring-1 ring-blue-300 cursor-pointer">
                  Choose Resume
                </p>
                <input
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                  name=""
                  hidden
                  id="resumeUpload"
                />
                <img
                  className="cursor-pointer"
                  src={assets.profile_upload_icon}
                  alt=""
                />
              </label>
              <button
                className="bg-green-200 text-green-800 ring-1 ring-green-300 px-4 py-2 rounded-md"
                onClick={(e) => setIsEditing(false)}
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a className="bg-purple-300  px-4 py-2 rounded-md " href="">
                Resume
              </a>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-slate-300 text-slate-800 px-4 py-2 rounded-md"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-left">Job Title</th>
              <th className="py-3 px-4 border-b text-left">Company</th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Applied On
              </th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) =>
              true ? (
                <tr key={index}>
                  <td className="py-3 px-4  border-b">{job.title}</td>
                  <td className="py-2 px-4   border-b">{job.company}</td>
                  <td className="py-2 px-4 max-sm:hidden  border-b">
                    {job.location}
                  </td>
                  <td className="py-2 px-4 max-sm:hidden  border-b">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4   border-b">
                    <span
                      className={`${
                        job.status === "Accepted"
                          ? "bg-green-100"
                          : job.status === "Rejected"
                          ? "bg-red-100"
                          : "bg-blue-100"
                      } px-4 py-1.5 rounded  `}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Application;
