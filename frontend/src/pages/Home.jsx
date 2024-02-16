import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Spinner from '../components/Spinner.jsx'
import { RingLoader } from "react-spinners";
import axios from "axios";
const Home = () => {
  const [books, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/book")
      .then((response) => {
        setLoading(false);
        setBook(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/book/create"> create</Link>
      </div>
      {loading ? (
        <RingLoader color="#36d7b7" />
      ) : (
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Author</td>
              <td>Publised</td>
              <td>Operations</td>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.published}</td>
                <td>
                  <Link to={`/book/details/${book._id}`}>Details</Link>
                  <Link to={`/book/edit/${book._id}`}>Edit</Link>
                  <Link to={`/book/delete/${book._id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
