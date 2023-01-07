import React from "react";

const Alert = ({ type, message }) => {
  return (
    <div
      className={`fixed z-50 top-10 left-1/2 -translate-x-1/2 px-7 rounded-xl min-w-max items-center ${
        type === "error" ? "bg-red-600" : "bg-blue-400"
      } text-white p-3`}
    >
      {message}
    </div>
  );
};
export default Alert;
