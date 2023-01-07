import React, { useContext, useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { UserContext } from "../contexts/userContext";
import CreateBook from "../components/CreateBook";
import axios from "../axiosLib";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [bookList, setBookList] = useState("all");
  const [createBook, setCreateBook] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `${bookList === "all" ? "/books" : "/books/mybooks"}`
      );
      setBooks(res.data.data.books);
    };
    fetchBooks();
  }, [bookList]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      setUser(localUser);
    } else {
      window.location.href = "/auth";
    }
  }, []);

  // const [user, setUser] = useState(null);
  const booksMap = books.map((book) => {
    return (
      <BookCard
        key={book.id}
        user={user}
        book={book}
        openMyBooks={() => setBookList("my")}
      />
    );
  });

  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center border-2 px-4 py-6 sm:px-10">
        <div className="flex space-x-4 ">
          <h2
            className={`${
              bookList === "all" ? "border-b-4 border-blue-800" : null
            } cursor-pointer h-10`}
            onClick={() => setBookList("all")}
          >
            All Books
          </h2>
          <h2
            className={`${
              bookList === "my" ? "border-b-4 border-blue-800" : null
            } cursor-pointer h-10`}
            onClick={() => setBookList("my")}
          >
            My Books
          </h2>
        </div>
        <div>
          <div
            className="cursor-pointer mb-4 sm:mb-0 px-6 py-4 border-2 transition ease-in-out duration-200 text-blue-800 hover:bg-blue-800 hover:text-white border-blue-800 rounded-md"
            onClick={() => setCreateBook(true)}
          >
            Create New Book
          </div>
        </div>
      </div>
      {createBook && (
        <CreateBook
          close={() => setCreateBook(false)}
          openMyBooks={() => setBookList("my")}
        />
      )}
      <div className="my-8 mx-10">
        {books.length > 0 ? (
          booksMap
        ) : (
          <h1 className=" text-4xl text-gray-700 font-semibold">No Books</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
