import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import { RingLoader } from "react-spinners";

const ShowBook = () => {
  const [ book, setBook ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    console.log(id,"heh")
    axios
      .get(`http://localhost:5555/book/${id}`)
      .then((response) => {
      console.log(response.data.message)

        setBook(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div>
        <Backbutton />
      </div>
      
        {loading ? (
          <RingLoader color="#36d7b7" />
        ) : (
          
          <div>
            {console.log(book)}
            <div>
              <span>Id</span>
              <span>{book._id}</span>
            </div>
            <div>
              <span>title</span>
              <span>{book.title}</span>
            </div>
            <div>
              <span>Author</span>
              <span>{book.author}</span>
            </div>
            <div>
              <span>published</span>
              <span>{book.published}</span>
            </div>
            <div>
              <span>Created</span>
              <span>{Date(book.CreatedAT).toString()}</span>
            </div>
          </div>
        )}
      </div>
    
  );
};

export default ShowBook;
