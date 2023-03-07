import React from "react";
import { Link } from "react-router-dom";

const GoBackButton = () => {
  return (
    <div>
      <Link to="/">
        <button className="GoBackButton">Go Back</button>
      </Link>
    </div>
  );
};

export default GoBackButton;
