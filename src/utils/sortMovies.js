import { SHORT_MOVIE_DURATION } from './constance';

export const sortMovies = (movies, query) => {
  return movies.filter(movie => movie.nameRU.toLowerCase().includes(query.input));
};

export const sortShortMovies = (movies) => {
  return movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION);
}