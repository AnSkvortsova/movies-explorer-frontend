import { MOVIES_API_BASE_URL } from './constance';

const checkResult = (response) => {
  if(response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`)
};

export function search() {
    return fetch(`${MOVIES_API_BASE_URL}/beatfilm-movies`, {
      headers: {'Content-Type': 'application/json'},
    }).then((response) => checkResult(response));
  };
