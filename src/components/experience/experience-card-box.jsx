import React from "react";

const ExperienceBox = ({ experience }) => {
  return (
    <div className="bg-white shadow rounded-lg p-8 mx-12">
      <div className="flex justify-between gap-12">
        <img width={106} src="/images/boys.svg" alt="boys" />
        <div>
          <h2 className="text-xl font-bold text-center">{experience.title}</h2>
          <div className="mt-2 text-gray-500">
            <ul className="list-disc">
              {experience.description.map((item, index) => (
                <li key={index} className="mt-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span className="text-gray-500 w-[160px]">{experience.Date}</span>
      </div>
    </div>
  );
};

export default ExperienceBox;
