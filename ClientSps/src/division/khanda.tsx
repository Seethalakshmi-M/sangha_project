// // 


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import "../App.css";

// const Khanda = () => {
//   const [khands, setKhands] = useState([]);
//   const { vibhagId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/khands/${vibhagId}`)
//       .then((res) => {
//         console.log("Khands fetched:", res.data)
//         setKhands(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [vibhagId]);

//   const handleKhandaClick = (khandId: string) => {
//     navigate(`/valays/${khandId}`);
//   };

//   return (
//     <div className="container">
//       <h1 className="heading">ಖಂಡ ಪಟ್ಟಿ</h1>
//       <div className="district-container">
//         {khands.map((khand: any) => (
//           <button
//             key={khand._id}
//             className="district-box"
//             onClick={() => handleKhandaClick(khand._id)}
//           >
//             {khand.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Khanda;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import "../App.css";

// const Khanda = () => {
//   const [khands, setKhands] = useState([]);
//   const [vibhagName, setVibhagName] = useState("");
//   const { vibhagId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch all khands
//     axios.get(`http://localhost:5000/api/khands/${vibhagId}`)
//       .then((res) => {
//         setKhands(res.data);
//       })
//       .catch((err) => console.log(err));

//     // Fetch vibhag name
//     axios.get(`http://localhost:5000/api/vibhags/${vibhagId}`)
//       .then((res) => {
//         setVibhagName(res.data.name);
//       })
//       .catch((err) => console.log(err));
//   }, [vibhagId]);

//   const handleKhandaClick = (khandId: string) => {
//     navigate(`/valays/${khandId}`);
//   };

//   return (
//     <div className="container">
//       <h1 className="heading">{vibhagName}</h1>
//       <div className="district-container">
//         {khands.map((khand: any) => (
//           <button
//             key={khand._id}
//             className="district-box"
//             onClick={() => handleKhandaClick(khand._id)}
//           >
//             {khand.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Khanda;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../Header";
import BackButton from "../back";

const Khanda = () => {
  const [khands, setKhands] = useState([]);
  const [vibhagName, setVibhagName] = useState("");
  const { vibhagId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Get Khands under the Vibhag
    axios.get(`http://localhost:5000/api/khands/${vibhagId}`)
      .then((res) => {
        setKhands(res.data);
      })
      .catch((err) => console.log("❌ Error fetching Khands:", err));

    // Get the Vibhag name itself
    axios.get(`http://localhost:5000/api/vibhags`)
      .then((res) => {
        const selected = res.data.find((v: any) => v._id === vibhagId);
        setVibhagName(selected ? selected.name : "Unknown Vibhag");
      })
      .catch((err) => console.log("❌ Error fetching Vibhags:", err));
  }, [vibhagId]);

  const handleKhandaClick = (khandId: string) => {
    navigate(`/valays/${khandId}`);
  };

  return (
    <>
      <Header />
    <div className="container">
      <h1 className="heading">{vibhagName}</h1>

      <div className="district-container">
        {khands.map((khand: any) => (
          <button
            key={khand._id}
            className="district-box"
            onClick={() => handleKhandaClick(khand._id)}
          >
            {khand.name}
          </button>
        ))}
        <BackButton />
      </div>
      
    </div>
    
    </>
  );
};

export default Khanda;
