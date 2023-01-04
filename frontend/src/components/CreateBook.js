import React, { useState, useEffect } from "react";
import axios from "../axiosLib";

const CreateBook = ({ close }) => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    isbn: "",
    category: "",
  });
  useEffect(() => {
    axios.get("/categories").then((res) => console.log(res.data));
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  const categoriesInput =
    categories.length > 0 ? (
      <select
        onChange={(e) => {
          return { ...formData, category: e.target.value };
        }}
      >
        {categories.map((category) => (
          <option value={category.name}>{category.name}</option>
        ))}
      </select>
    ) : null;

  return (
    <div className=" overflow-y-scroll">
      <div className="fixed z-10 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30"></div>
      <div className=" max-w-screen-lg flex flex-col border-1 border-blue-200 bg-white p-10 rounded-lg w-screen z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="flex justify-end">
          <button className="text-gray-700 text-2xl" onClick={close}>
            X
          </button>
        </div>
        <form className="flex flex-col w-full mb-6" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            className="px-4 py-2 border-slate-500 border-2 rounded-md mb-5"
            type="text"
            id="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
          <label htmlFor="body">Body</label>
          <textarea
            className="px-4 py-2 border-slate-500 border-2 rounded-md h-40 mb-5 min-h-max"
            type="text"
            id="body"
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            required
          />
          <label htmlFor="isbn">ISBN</label>
          <input
            className="px-4 py-2 border-slate-500 border-2 rounded-md mb-5"
            type="text"
            id="isbn"
            onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
            required
          />
          {categoriesInput}

          <button
            className="transition ease-out duration-200 rounded-md bg-slate-600 text-white px-4 py-2 hover:bg-slate-700 hover:shadow-lg hover:cursor-pointer"
            type="submit"
          >
            Create Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
