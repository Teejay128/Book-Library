import React, { useState, useEffect } from "react";
import axios from "../axiosLib";
import Alert from "./Alert";

const CreateBook = ({ close, openMyBooks }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("/categories")
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    isbn: "",
    category: categories[0],
  });

  const [alert, setAlert] = useState({
    showAlert: false,
    type: "",
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(formData);
      await axios.post("/books", formData, {
        withCredentials: true,
      });

      setAlert({
        showAlert: true,
        type: "success",
        message: "Book Created successfully",
      });

      setTimeout(() => {
        window.location.reload();
        // Not needed anymore
        // close();
        // openMyBooks();
      }, 1500);
    } catch (err) {
      console.log(err);
      setAlert({
        showAlert: true,
        type: "error",
        message: err.response.data.message,
      });
      setTimeout(() => {
        setAlert({ showAlert: false, type: "", message: "" });
      }, 1500);
    }
  }

  const categoriesInput =
    categories.length > 0 ? (
      <select
        className="px-4 py-2 border-slate-500 border-2 rounded-md mb-5"
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      >
        {categories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    ) : null;

  return (
    <div className=" overflow-y-scroll">
      {alert.showAlert && <Alert type={alert.type} message={alert.message} />}

      <div
        onClick={close}
        className="fixed z-10 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30"
      ></div>
      <div className=" max-w-screen-lg flex flex-col border-1 border-blue-200 bg-white p-10 rounded-lg w-screen z-20 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="flex justify-end">
          <button className="text-gray-700 text-2xl" onClick={close}>
            X
          </button>
        </div>
        <div className="flex justify-center">
          <h2 className="text-2xl font-medium">Create a Book</h2>
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
