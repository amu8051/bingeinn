import React, { useState, useEffect } from 'react';
import requests from '../requests';
import './Banner.css';
const baseUrl = 'https://api.themoviedb.org/3';

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    fetch(baseUrl + requests.fetchNetflixOriginals) //api for the get request
      .then((response) => response.json())
      .then((data) => {
        const x = Math.floor(Math.random() * data.results.length - 1);
        setBannerMovie(data.results[x]);
      })
      .catch((e) => {
        console.log(e, 'error!!!');
      });
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div>
      <h1
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(
               "https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}"
           )`,
          backgroundPosition: 'center-center',
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {bannerMovie?.title ||
              bannerMovie?.name ||
              bannerMovie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button
              // onClick={() => handleClick(bannerMovie)}
              className="banner_button"
            >
              Play
            </button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(bannerMovie?.overview, 150)}
          </h1>
        </div>

        <div className="banner--fadeBottom" />
      </h1>

      {/* {trailerurl && <YouTube videoId={trailerurl} opts={opts} />} */}
    </div>
  );
};

export default Banner;
