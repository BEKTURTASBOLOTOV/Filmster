import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import SearchBar from "../../components/Searchbar/SearchBar";
import MovieList from "../../components/movies/MovieList";
const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);

  const handleSubmit = (data) => {
    const val = data;
    setQuery(val);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then((res) => {
        setFilms(res.data.results);
      });
  }, [query]);

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      <MovieList films={films} />
    </>
  );
};

export default MoviesPage;
