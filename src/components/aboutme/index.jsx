import React from "react";
import AboutContent from "./about-content";
import Label from "../label";

const About = () => {
  return (
    <div className="flex flex-col items-center px-10 py-12 bg-gray-100 dark:bg-[#2e3440]">
      <Label text={"About Me"} />
      <AboutContent />
    </div>
  );
};

export default About;
