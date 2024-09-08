const API_KEY=process.env.REACT_APP_API_KEY;
const request={
  fetchtvmovies: `/discover/tv?api_key=${API_KEY}&with_networks-21`,
  fetchcomedymovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`, 
 fetchactionmovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
  fetchromancemovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
  fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1
`, 
}
