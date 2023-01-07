import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosLib";

const Details = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`/books/${id}`);
      setBook(res.data.data.book);
      console.log(res.data.data.book);
    };
    fetchBook();
  }, [id]);
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.isbn}</p>
      <p>{book.body}</p>
      <p>{book.category}</p>
    </div>
  );
};

export default Details;
