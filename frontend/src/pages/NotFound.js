import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-gray-200">
      <div className="min-w-max max-w-5xl p-11 flex flex-col items-center">
        <div className="text-9xl font-bold text-gray-500">404</div>
        <div className="text-2xl font-bold text-gray-500">Page Not Found</div>
        <div className="text-xl font-bold text-gray-500 mt-4">
          Go back to{" "}
          <Link to={"/"} className="underline text-blue-700">
            Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
