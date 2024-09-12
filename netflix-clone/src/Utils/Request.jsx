const API_KEY = import.meta.env.VITE_API_KEY;

const request={
  fetchtranding :`/trending/tv/day?api_key=${API_KEY}&language=en-US`,
   fetchnetflixorginals: `/discover/tv?api_key=${API_KEY}&with_networks-21`,
  fetchcomedymovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`, 
 fetchactionmovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
  fetchromancemovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
  fetchTopRatedMovies:`tv/top_rated?api_key=${API_KEY}&language=en-US&page=11`,
  
}
export default request