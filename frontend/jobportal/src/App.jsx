import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobApplication from "./pages/JobApplication";
import Application from "./pages/Application";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply/:id" element={<JobApplication />} />
          <Route path="/applications" element={<Application />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
