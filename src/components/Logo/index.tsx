import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/">Airbnb</Link>
    </div>
  );
};

export default Logo;
