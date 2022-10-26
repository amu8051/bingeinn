import React from 'react';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../requests';
import Nav from '../components/Nav';

const Home = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '15a7a56c20mshfbd56df7f9a7658p1c0a13jsn64e0e627e939',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  };

  fetch('https://ott-details.p.rapidapi.com/getnew?region=IN&page=1', options)
    .then((response) => response.json())
    .then((response) => console.log(response, 'ott!!!'))
    .catch((err) => console.error(err));
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="NETFLIX OG" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Amazon" fetchUrl={requests.fetchAmazon} />
      <Row title="Disney+Hotstar" fetchUrl={requests.fetchDisneyHotstar} />
      <Row title="Sony Liv" fetchUrl={requests.fetchSonyLiv} />
      <Row title="TVF Play" fetchUrl={requests.fetchTVFPlay} />
      <Row title="Zee5" fetchUrl={requests.fetchZee5} />
      <Row title="Voot" fetchUrl={requests.fetchVoot} />
      <Row title="Alt Balaji" fetchUrl={requests.fetchAltBalaji} />
    </div>
  );
};

export default Home;
