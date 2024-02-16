import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublish] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    console.log("this ");
    axios.get(`http://localhost:5555/book/${id}`).then((response) => {
      console.log(response);
      setTitle(response.data.message.title);
      setAuthor(response.data.message.author);
      setPublish(response.data.message.published);
      setLoading(false);
    });
  }, []);
  const handleEditBook = () => {
    setLoading(true);
    const data = {
      title,
      author,
      published,
    };
    axios
      .put(`http://localhost:5555/book/${id}`, data)
      .then((response) => {
        setLoading(false);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>EditBook</div>
      {loading ? (
        <RingLoader color="#36d7b7" />
      ) : (
        <div>
        
          <label> Id </label>
          {id}
          <label> Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label> Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label> Published</label>
          <input
            type="text"
            value={published}
            onChange={(e) => setPublish(e.target.value)}
          />
          <button onClick={handleEditBook}>button</button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
