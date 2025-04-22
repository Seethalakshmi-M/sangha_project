// 


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vibhag from "./division/vibhag";
import Khand from "./division/khanda";
import Valay from "./division/valay";
// import BackButton from "./back";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vibhag />} />
        <Route path="/khands/:vibhagId" element={<Khand />} />
        <Route path="/valays/:khandId" element={<Valay />} />
        {/* <Route path="/ClientSps/src/back.tsx" element={<BackButton></BackButton>} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
