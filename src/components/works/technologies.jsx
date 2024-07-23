// App.js
import React from "react";
import Button from "./buttons";

const technologies = [
  "React",
  "Next.js",
  "Typescript",
  "Nest.js",
  "PostgreSQL",
  "Tailwindcss",
  "Figma",
  "Cypress",
  "Storybook",
  "Git",
];

const Technologies = () => {
  return (
    <div className="w-[480px]">
      {technologies.map((tech, index) => (
        <Button key={index} label={tech} />
      ))}
    </div>
  );
};

export default Technologies;
