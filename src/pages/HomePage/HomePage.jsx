import React, { useEffect, useState } from "react";
import MovieList from "../../components/movies/MovieList";
import axios from "axios";
import Button from "../../components/Button/Button";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=826ff55be219075fe0c51d998b696b2f&page=${pages}`
      )
      .then((res) => {
        setFilms(() => [...films, ...res.data.results]);
      });
  }, [pages]);

  const handleClick = () => {
    setPages((prevState) => prevState + 1);
  };

  return (
    <>
      <MovieList films={films} />
      <Button handleClick={handleClick} />
      {films.length > 0 && <ScrollButton />}
    </>
  );
};

export default HomePage;
