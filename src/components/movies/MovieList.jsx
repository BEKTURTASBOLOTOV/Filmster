import React from "react";
import MoviesItem from "./MoviesItem";
const MovieList = ({ films }) => {
  const filmElem = films.map((item) => <MoviesItem key={item.id} {...item} />);
  return (
    <div className="movieDiv">
      <ul className="movieList">{filmElem}</ul>
    </div>
  );
};

export default MovieList;
