import React from "react";
import Nav from "../components/Nav";
import Poster from "../components/Poster";
import JobListings from "../components/JobListings";
import PlayStore from "../components/PlayStore";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />;
      <Poster />
      <JobListings />
      <PlayStore />
      <Footer />
    </div>
  );
};

export default Home;
