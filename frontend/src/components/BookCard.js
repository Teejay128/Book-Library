import React from "react";

const BookCard = () => {
  return (
    <div className="cursor-pointer mb-4">
      <div className="p-5 py-7 border-2 border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-4xl mb-4">Title Here</div>
        <div className="text-xl text-gray-600 mb-2">
          Written by <span className="italic">Author Here</span>
        </div>
        <div className="text-xl text-gray-600 italic mb-2">
          Genre: <span className="italic">category</span>
        </div>
        <div className="text-lg text-gray-400 italic">ISBN here</div>
      </div>
    </div>
  );
};

export default BookCard;
