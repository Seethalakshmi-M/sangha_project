import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useNavigationHistory } from "./useNavigationHistory.ts";
import "./back.css";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getPreviousAllowedPath } = useNavigationHistory();

  const handleBack = () => {
    const previousPath = getPreviousAllowedPath();

    if (previousPath && previousPath !== location.pathname) {
      navigate(previousPath);
    } else {
      console.log("No valid previous page to go back to.");
    }
  };

  return (
    <button className="back-button" onClick={handleBack}>
      ← Back
    </button>
  );
};

export default BackButton;
