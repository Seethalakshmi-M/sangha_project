import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Header from "../Header";


const Vibhag = () => {
  const [vibhags, setVibhags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vibhags")
      .then((res) => setVibhags(res.data))
      .catch((err) => console.error("Error fetching Vibhags:", err));
  }, []);

  const handleClick = (id: string) => {
    navigate(`/khands/${id}`);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="main-heading">ಕನಾಟಕ ಪ್ರಾಂತ್ಯ</h2>
        <div className="district-grid">
          {vibhags.map((vibhag: any) => (
            <button
              key={vibhag._id}
              className="district-box"
              onClick={() => handleClick(vibhag._id)}
            >
              {vibhag.name}
            </button>
          ))}
        </div>
      </div>

    </>
  );
};

export default Vibhag;
