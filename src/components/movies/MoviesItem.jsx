import React from "react";
import { Link } from "react-router-dom";

const MoviesItem = ({
  title,
  name,
  id,
  poster_path,
  backdrop_path,
  vote_average,
}) => {
  return (
    <li className="movieItem">
      <Link className="mItem-h2" to={`/movies/${id}`}>
        <img
          className="movieImage"
          src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
          alt=""
        />
        <h2>{title || name}</h2>
        <p>User Score {vote_average.toFixed(1)}/10</p>
      </Link>
    </li>
  );
};

export default MoviesItem;
