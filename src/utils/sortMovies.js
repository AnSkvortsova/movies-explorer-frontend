import { SHORT_MOVIE_DURATION } from './constance';

export const sortMovies = (movies, query) => {
  if(query.isShortMovie) {
    const getShortMovies = movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION);
    const sortedShortMovies = getShortMovies.filter(movie => movie.nameRU.toLowerCase().includes(query.input));
    return sortedShortMovies;
  }

  if(query.isShortMovie && !query.input) {
    return movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION);
  }

  const sortedMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(query.input));
  return sortedMovies;
};
