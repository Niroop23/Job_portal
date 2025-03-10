import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  const [jobs, setJobs] = useState([]); // Initialize jobs state

  const fetchJobs = async () => {
    setJobs(jobsData);
  };

  useEffect(() => {
    try {
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [isSearchInput, setIsSearchInput] = useState(false);

  const value = {
    setSearchFilter,
    searchFilter,
    setIsSearchInput,
    isSearchInput,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLogin,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
