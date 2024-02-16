import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import { RingLoader } from "react-spinners";

const CreateBook = () => {
  const [ title, setTitle ] = useState("");
  const [ author, setAuthor ] = useState("");
  const [  published, setPublish ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      published,
    };
    axios
      .post("http://localhost:5555/book", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Backbutton />
      </div>
      {loading ? (
        <RingLoader color="#36d7b7" />
      ) : (
        <div>
          <div>
            <label>Title</label>
            <input 
            type="text"
            value = {title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <label>Author</label>
            <input 
            type="text"
            value = {author}
            onChange={(e)=>setAuthor(e.target.value)}
            />
            <label>published</label>
            <input 
            type="text"
            value = {published}
            onChange={(e)=>setPublish(e.target.value)}
            />
            <button onClick={handleSaveBook}>SUBMIT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
