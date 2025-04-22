// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { districtsData } from "../database/dataserver";

// export default function Prantya() {
//   const navigate = useNavigate();
//   const districts = Object.keys(districtsData); // Extract district names
//   const [, setSelectedDistrict] = useState("");

//   // Function to handle district selection and navigate to Vibhaga
//   const handleSelectDistrict = (district: string) => {
//     setSelectedDistrict(district);
//     navigate(`/vibhaga/${encodeURIComponent(district)}`); // Navigate with district param
//   };

//   return (
//     <div className="container">
//       <h1 className="title">ಕರ್ನಾಟಕ ದಕ್ಷಿಣ ಪ್ರಾಂತ</h1>
//       <div className="district-grid">
//         {districts.map((district, index) => (
//           <div 
//             key={index} 
//             className="district-box cursor-pointer"
//             onClick={() => handleSelectDistrict(district)}
//           >
//             {district}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// 



