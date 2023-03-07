import React from "react";
import defaultImage from "../navbar/image/defaultNotImage.svg";
const CastItem = ({ name, character, popularity, profile_path }) => {
  return (
    <li className="castItem">
      <img
        className="castImage"
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImage
        }
        alt=""
      />
      <h3 className="castName">{name}</h3>
      <p className="castText">Character: {character}</p>
      <p className="castText">Popularity: {popularity.toFixed(1)}</p>
    </li>
  );
};

export default CastItem;
