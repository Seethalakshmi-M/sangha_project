import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";
import Header from "../Header";
import BackButton from "../back";

const Valay = () => {
  const [valays, setValays] = useState([]);
  const [khandName, setKhandName] = useState("");
  const { khandId } = useParams();

  useEffect(() => {
    if (khandId) {
      // ✅ Fetch Valays under the selected Khanda
      console.log(`Hitting: http://localhost:5000/api/valays/bykhand/${khandId}`);
      axios.get(`http://localhost:5000/api/valays/bykhand/${khandId}`)
        .then((res) => {
          setValays(res.data);
        })
        .catch((err) => console.log("❌ Error fetching Valays:", err));

      // ✅ Fetch Khanda Name using the new /khandbyid route
      axios.get(`http://localhost:5000/api/khands/khandbyid/${khandId}`)
        .then((res) => {
          setKhandName(res.data.name);
        })
        .catch((err) => console.log("❌ Error fetching Khand name:", err));
    }
  }, [khandId]);

  return (
    <>
    <Header />
    <div className="container">
      <h1 className="heading">{khandName}</h1>
      <div className="district-container">
        {valays.length > 0 ? (
          valays.map((valay: any) => (
            <button key={valay._id} className="district-box">
              {valay.name}
            </button>
          ))
        ) : (
          <p>No Valays found for this Khanda.</p>
        )}
      </div>
      <BackButton />
    </div>
    </>
  );
};
export default Valay;
