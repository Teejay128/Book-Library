import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosLib";
import Alert from "./Alert";
import UpdateBook from "./updateBook";
import ConfirmDelete from "./ConfirmDelete";

const BookCard = ({ book, user, openMyBooks }) => {
  const [showUpdateBook, setShowUpdateBook] = useState(false);
  const [alert, setAlert] = useState({
    showAlert: false,
    type: "",
    message: "",
  });
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const deleteBook = async () => {
    try {
      await axios.delete(`/books/${book.id}`, {
        withCredentials: true,
      });
      setAlert({
        showAlert: true,
        type: "success",
        message: "Book deleted successfully",
      });
      await setTimeout(() => {
        setAlert({ showAlert: false, type: "", message: "" });
      }, 1500);
      window.location.reload();
    } catch (err) {
      console.log(err);
      setAlert({
        showAlert: true,
        type: "error",
        message: "Something went wrong",
      });
      await setTimeout(() => {
        setAlert({ showAlert: false, type: "", message: "" });
      }, 1500);
    }
  };
  return (
    <div className=" mb-4">
      {alert.showAlert && <Alert type={alert.type} message={alert.message} />}
      {showUpdateBook && (
        <UpdateBook
          close={() => setShowUpdateBook(false)}
          openMyBooks={openMyBooks}
          book={book}
        />
      )}
      {showConfirmDelete && (
        <ConfirmDelete
          cancel={() => setShowConfirmDelete(false)}
          delete={deleteBook}
        />
      )}
      <div className="p-5 py-7 border-2 border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition ease-in-out duration-200">
        <div className="flex justify-between">
          <div>
            <Link className="cursor-pointer" to={`/book/${book.id}`}>
              <div className="text-4xl mb-4 transition ease-out duration-500 hover:underline truncate w-40 sm:w-[30rem]">
                {book.title}
              </div>
            </Link>
            <div className="text-xl text-gray-600 mb-2 truncate w-40 sm:w-[30rem]">
              By <span className="italic">{book.author.username}</span>
            </div>
            <div className="text-xl text-gray-600 italic mb-2 truncate w-40 sm:w-[30rem]">
              Genre: <span className="italic">{book.category}</span>
            </div>
            <div className="text-lg text-gray-400 italic truncate w-40 sm:w-[30rem]">
              {book.isbn}
            </div>
          </div>
          {book.author.id === user.id ? (
            <div>
              <svg
                onClick={() => setShowUpdateBook(true)}
                className="w-8 h-8 text-gray-500 hover:text-gray-700 mb-4 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <svg
                onClick={() => setShowConfirmDelete(true)}
                className="w-8 h-8 text-gray-500 hover:text-gray-700 mb-4 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
