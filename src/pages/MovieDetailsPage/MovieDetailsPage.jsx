import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import { Routes, Route, NavLink } from "react-router-dom";
import GoBackButton from "../../components/Button/GoBackButton";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    try {
      const loadMovie = async () => {
        await axios
          .get(
            `
  https://api.themoviedb.org/3/movie/${id}?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`
          )
          .then((res) => {
            setMovie(res.data);
          });
      };
      loadMovie();
    } catch (error) {
      alert(error);
    }
  }, [id]);

  const genresName = movie.genres?.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });
  const userScore = Math.floor(movie.vote_average);
  const [videos, setVideos] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    try {
      const fetchVideo = async () => {
        let videoAPI = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`;
        await axios.get(videoAPI).then((res) => {
          setVideos(res.data.results);
          console.log(res);
        });
      };

      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const filmTrailer = videos.map((video) => video.key);

  return (
    <div>
      <GoBackButton />
      {movie && (
        <>
          <div className="movieDetails">
            <img
              className="movieDetailsImage"
              src={`https://image.tmdb.org/t/p/w500${
                movie.poster_path || movie.backdrop_path
              }`}
              alt=""
            />
            <button onClick={() => setLoad(true)} className="trailer">
              TRAILER
            </button>

            <ul className="movieDetails-Ul">
              <li>
                <h2>{movie.title}</h2>
              </li>
              <li>
                <p>
                  User Score:
                  {userScore}/10
                </p>
              </li>
              <li>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </li>
              <li>
                <h3>Genres</h3>
                <ul className="mvdUlGenres">
                  {movie.genres ? genresName : ""}
                </ul>
              </li>
            </ul>

            <div className="detailsList">
              <NavLink to="cast" className="detailsLink">
                Cast
              </NavLink>
              <NavLink to="reviews" className="detailsLink">
                Review
              </NavLink>
            </div>
          </div>
          <div
            onClick={() => setLoad(false)}
            className={load ? "backdrop" : "hidden"}
          >
            <iframe
              title="iframe"
              className="iframe"
              width="760"
              height="415"
              src={`https://www.youtube.com/embed/${
                filmTrailer[filmTrailer.length - 1]
              }`}
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      <ScrollButton />
    </div>
  );
};

export default MovieDetailsPage;
