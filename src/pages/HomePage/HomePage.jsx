import React, { useEffect, useState } from "react";
import MovieList from "../../components/movies/MovieList";
import axios from "axios";
import Button from "../../components/Button/Button";
const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [pages, setPages] = useState(1);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=826ff55be219075fe0c51d998b696b2f`
      )
      .then((res) => {
        setFilms(res.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=826ff55be219075fe0c51d998b696b2f&page=${pages}`
      )
      .then((res) => {
        setFilms((prevState) => [...prevState, ...res.data.results]);
      });
  }, [pages]);

  const handleClick = () => {
    setPages((prevstate) => prevstate + 1);
  };

  return (
    <>
      <MovieList films={films} />
      <Button handleClick={handleClick} />
    </>
  );
};

export default HomePage;
