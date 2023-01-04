import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../contexts/userContext";
import CreateBook from "../components/CreateBook";
const Home = () => {
  // const { user, setUser } = useContext(UserContext);
  // useEffect(() => {
  //   const localUser = JSON.parse(localStorage.getItem("user"));
  //   if (localUser) {
  //     setUser(localUser);
  //   } else {
  //     window.location.href = "/signup";
  //   }
  // });
  const [books, setBooks] = useState([]);
  const [bookList, setBookList] = useState("all");
  const [createBook, setCreateBook] = useState(false);
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
      {createBook && <CreateBook close={() => setCreateBook(false)} />}
    </div>
  );
};

export default Home;
