import React from "react";
import Nav from "../components/Nav";
import Poster from "../components/Poster";
import JobListings from "../components/JobListings";

const Home = () => {
  return (
    <div>
      <Nav />
      <Poster />
      <JobListings />
    </div>
  );
};

export default Home;
