// Button.js
import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-gray-200 text-gray-600 font-normal py-2 px-4 rounded-full m-1">
      {label}
    </button>
  );
};

export default Button;
