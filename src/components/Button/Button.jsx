import React from "react";

const Button = ({ handleClick }) => {
  return (
    <div>
      <button className="loading-btn" onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default Button;
