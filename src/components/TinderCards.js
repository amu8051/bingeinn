import React, { useState, useEffect, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import requests from '../requests';
import Nav from './Nav';

const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

function TinderCards() {
  const [lastDirection, setLastDirection] = useState();
  const [movies, setMovies] = useState([]);
  // let childRefs;

  // const setChildRefs = (data) => {
  //   let temp = Array(data.results.length)
  //     .fill(0)
  //     .map((i) => React.createRef());
  //   childRefs = useRef(temp);
  // };

  useEffect(() => {
    fetch(baseUrl + requests.fetchTrending) //api for the get request
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'data!!!!');
        setMovies(data.results.reverse());
      })
      .catch((e) => {
        console.log(e, 'error!!!');
      });
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name, ' left the screen!');
  };

  return (
    <>
      <Nav />
      <div className="cards">
        <link
          href="https://fonts.googleapis.com/css?family=Damion&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />
        <h1>Movie Cards</h1>
        <div className="cardContainer">
          {movies.map((movie, index) => (
            <>
              <TinderCard
                className="swipe"
                key={movie.poster_path}
                onSwipe={(dir) => swiped(dir, movie.name)}
                onCardLeftScreen={() => outOfFrame(movie.name)}
              >
                <div
                  style={{
                    backgroundImage: `url(${imageBaseUrl + movie.poster_path})`,
                  }}
                  className="card"
                ></div>
                {/* <h3>{movie.name}</h3> */}
              </TinderCard>
            </>
          ))}
        </div>

        {lastDirection ? (
          <h4 className="infoText">You swiped {lastDirection}!!</h4>
        ) : (
          <h4 className="infoText" />
        )}
      </div>
    </>
  );
}

export default TinderCards;
