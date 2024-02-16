import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
const DeleteBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const [loading,setLoading] = useState(false)
  const {id} = useParams()
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/book/${id}`)
      .then((response) => {
        setBook(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const del = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/book/${id}`)
      .then(() => {
        setLoading(false);
        alert("succesfully deleted");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const nav = () => {
    navigate("/");
  };
  return (
    <div>
      {loading ? (
        <RingLoader color="#36d7b7" />
      ) : (
        <div>
          <div>
            <label>id</label>
            {book._id}
            <label>Title</label>
            {book.title}
            <label>Author</label>
            {book.author}
            <label>published</label>
            {book.published}
          </div>
          <div>
            Are you sure to delete <button onClick={del}>yes</button>
            <button onClick={nav}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
