class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };

  _checkResult(response) {
    if(response.ok) {
      return response.json();
    };
    return Promise.reject(`Ошибка: ${response.status}`);
  };

  search() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    }).then((response) => this._checkResult(response));
  };
};

const options = {
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
		'Content-Type': 'application/json',
	},
};

const moviesApi = new MoviesApi(options);
export default moviesApi;