import { MAIN_API_BASE_URL } from './constance';

const checkResult = (response) => {
  if(response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`)
};

export const register = (name, email, password) => {
  return fetch(`${MAIN_API_BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({name, email, password}),
	}).then((response) => checkResult(response));
};

export const login = (email, password) => {
  return fetch(`${MAIN_API_BASE_URL}/signin`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({email, password}),
	}).then();
};

export const logout = () => {
  return fetch(`${MAIN_API_BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
  }).then((response) => {
    if(response.ok) {
      return response;
    }
    return Promise.reject(`Ошибка: ${response.status}`)
  });
}

export const getUserData = () => {
  return fetch(`${MAIN_API_BASE_URL}/users/me`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((response) => checkResult(response));
};

export const updateUser = (name, email) => {
	return fetch(`${MAIN_API_BASE_URL}/users/me`, {
		method: 'PATCH',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({name, email}),
	}).then((response) => checkResult(response));
};

export const getMovies = () => {
	return fetch(`${MAIN_API_BASE_URL}/movies`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((response) => checkResult(response));
};

export const createMovie = (data) => {
	return fetch(`${MAIN_API_BASE_URL}/movies`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co${data.image.url}`,
      trailer: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
		})
	}).then((response) => checkResult(response));
};

export const removeMovie = (id) => {
	return fetch(`${MAIN_API_BASE_URL}/movies/${id}`, {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		}
	}).then((response) => {
    if(response.ok) {
      return response;
    }
    return Promise.reject(`Ошибка: ${response.status}`)
  });
};
