import React, { useState, useEffect } from 'react';
import './Row.css';

const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(baseUrl + fetchUrl) //api for the get request
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'data!!!!');
        setMovies(data.results);
      })
      .catch((e) => {
        console.log(e, 'error!!!');
      });
  }, []);

  return (
    <div>
      <h1 style={{ color: 'white' }}>{title}</h1>
      <div className="row_image_container">
        {movies.map((movie) => {
          return (
            <div>
              <img
                className="row_image"
                src={`${imageBaseUrl}${movie.poster_path}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
