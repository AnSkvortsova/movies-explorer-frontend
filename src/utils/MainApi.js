class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResult(response) {
    if(response.ok) {
      return response.json();
    };
    return Promise.reject(`Ошибка: ${response.status}`);
  };

  register(password, email) {
    return fetch(`${this._baseUrl}/signup`, {
	  	method: 'POST',
	  	headers: this._headers,
	  	body: JSON.stringify({password, email}),
	  }).then((response) => this._checkResult(response));
  };

  authorize (password, email) {
    return fetch(`${this._baseUrl}/signin`, {
	  	method: 'POST',
	  	credentials: 'include',
	  	headers: {
	  		Accept: 'application/json',
	  		'Content-Type': 'application/json',
	  	},
	  	body: JSON.stringify({password, email}),
	  }).then();
  };
};

const options = {
	baseUrl: 'https://api.movielover.nomoredomains.work',
	headers: {
    Accept: 'application/json',
		'Content-Type': 'application/json',
	},
};
const mainApi = new MainApi(options);
export default mainApi;