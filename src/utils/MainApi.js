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
