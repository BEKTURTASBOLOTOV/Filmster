import React from "react";

const MoviesItem = ({ title, name, poster_path, backdrop_path }) => {
  return (
    <li className="movieItem">
      <img
        className="movieImage"
        src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
        alt=""
      />
      <h2>{title || name}</h2>
    </li>
  );
};

export default MoviesItem;
