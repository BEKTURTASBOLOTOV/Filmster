import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NavbarList from "./components/navbar/NavbarList";

const App = () => {
  return (
    <>
      <NavbarList />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/movies/:id/*" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
