import React from "react";

const ConfirmDelete = (props) => {
  const handleDelete = async () => {
    await props.delete();
    props.cancel();
  };
  return (
    <div>
      <div
        onClick={props.cancel}
        className="fixed z-10 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30"
      ></div>
      <div className=" max-w-screen-md flex flex-col border-1 items-center border-blue-200 bg-white p-10 rounded-lg w-screen z-20 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div>
          <h3 className=" text-center text-3xl font-semibold mb-6">
            Confirm Delete
          </h3>
          <p className="text-xl mb-6 font-normal">
            Do you really want to delete this book ?
          </p>
        </div>
        <div className="space-x-20">
          <button
            className="px-3 py-2 bg-red-300 hover:bg-red-600 hover:text-white rounded-lg hover:shadow-lg text-lg transition ease-out duration-200"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="px-3 py-2 bg-gray-300 hover:bg-gray-600 hover:text-white rounded-lg hover:shadow-lg text-lg transition ease-out duration-200"
            onClick={props.cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
