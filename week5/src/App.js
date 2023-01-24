import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
//1-Reach fetch API and convert movies to json format
//2-confirm effect action when movies are called
//3-Get the input values with the handleClick function and send them to the set
//4-render movies


const App = () => {
  //-----------useState und const part
  const [movies, setMovies] = useState([]);

  const [movieTitle, setState] = useState("");
  const key = "YOUR_API_KEY_HERE"
const api = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${key}`;

  const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) ?? false);

  const style = isDarkMode  ? "container-fluid bg-dark text-muted" : "container-fluid bg-light text-muted"

  //----------- useEffect part
  ​useStateveuseEffectkancalarMovieListbileşen

BuradauseStatekanca


Kodu kopyala
import React, { useState, useEffect } from 'react';

function MovieList() {
usbhduaıfbcguyaqfcbYYyyyyyy 
const [movies, setMovies] = useState([]);

  

  useEffect


  use


 


useEffect(() => {
    
    fetch

   
fetch('https://my-movie-api.com/movies')
      .
      .

     

  useEffect(() => {


    //-------confirm effect action when movies are called
    getMovieList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //------------Reach fetch API and convert movies to json format
  const getMovieList = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${key}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }

  };
  //-----------Get the input values with the hadleclick function and send them to the set
  const HandleClickEvent = (e) => {
   e.preventDefault();
    setState(e.target.checked);
    movieTitle(e.target.checked);
};

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
  
  }

  //------------render movies
  return (
    <div className={style} style={{height:"100%",minHeight:"100vh"}}> 
    <form onSubmit={handleClickEvent}>
      <input
        type="text"
        placeholder="Enter movie title"
        value={movieTitle}
        onChange={(e) => movieTitle(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    <button onClick={toggleDarkMode} label="Toggle Dark Mode">Toggle Dark Mode</button>
    <div className="row">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  </div>
);
};
export default App;
