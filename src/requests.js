const API_KEY = '405255502c8827c77e2013944576197a';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchAmazon: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
  fetchSonyLiv: `/discover/tv?api_key=${API_KEY}&with_networks=2646`,
  fetchTVFPlay: `/discover/tv?api_key=${API_KEY}&with_networks=1145`,
  fetchZee5: `/discover/tv?api_key=${API_KEY}&with_networks=2590`,
  fetchVoot: `/discover/tv?api_key=${API_KEY}&with_networks=2532`,
  fetchAltBalaji: `/discover/tv?api_key=${API_KEY}&with_networks=2112`,
};

export default requests;
