import React from "react";
import { assets } from "../assets/assets";
import DOMPurify from "dompurify";

const JobCard = ({ job }) => {
  return (
    <div className="border rounded p-5 shadow-md">
      <div>
        <img src={assets.company_icon} alt="" />
      </div>
      <h4>{job.title}</h4>
      <div>
        <span>{job.location}</span>
        <span>{job.label}</span>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(job.description.slice(0, 140)),
        }}
      ></p>
      <div>
        <button>Apply now</button>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default JobCard;
