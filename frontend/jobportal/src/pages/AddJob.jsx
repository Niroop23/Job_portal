import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Hyderabad");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Intermediate Level");
  const [salary, setSalary] = useState(0);
  const editRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editRef.current) {
      quillRef.current = new Quill(editRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div>
      <main>
        <form className="container p-4 flex flex-col gap-3 w-full items-start ">
          <div className="w-full ">
            <p className="select-none mb-2">Job Title</p>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              className="w-full max-w-lg px-3 py-2 ring-2 ring-zinc-300 rounded select-none outline-none"
              placeholder="Type here"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>
          <div className="w-full max-w-lg">
            <p className="select-none mt-3 mb-2">Job Description</p>
            <div ref={editRef}></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-10 ">
            <div>
              <p className="select-none mb-2">Job Category</p>
              <select
                className="w-full px-2 py-1 ring-2  ring-zinc-300 rounded select-none"
                onChange={(e) => setCategory(e.target.value)}
              >
                {JobCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="select-none mb-2">Job Location</p>
              <select
                className="w-full px-2 py-1 ring-2  ring-zinc-300 rounded  select-none"
                onChange={(e) => setLocation(e.target.value)}
              >
                {JobLocations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="select-none mb-2">Job Level</p>
              <select
                className="w-full px-2 py-1 ring-2  ring-zinc-300 rounded  select-none"
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="Beginner Level">Beginner Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>
          </div>
          <div>
            <p className="mb-2">Salary</p>
            <input
              type="number"
              className="w-full px-2 py-1 ring-2 ring-zinc-300 rounded sm:w-[120px]"
              onChange={(e) => setSalary(e.target.value)}
              placeholder="10000"
              min={0}
            />
          </div>
          <button className="w-[100px] bg-black text-[#f7f5fa] py-1 px-2 rounded-md">
            Add Job
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddJob;
