// Button.js
import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-gray-200 text-gray-600 font-normal dark:bg-[#374151] dark:text-[#D1D5DB] px-4 rounded-full m-1">
      {label}
    </button>
  );
};

export default Button;
