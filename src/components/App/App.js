import { React, useState, useEffect, useCallback } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import './App.css';
import { Navigation } from '../Navigation/Navigation';
import { Header } from '../Header/Header'; 
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer'; 
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { MenuPopup } from '../MenuPopup/MenuPopup';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { sortMovies, sortShortMovies } from '../../utils/sortMovies';

import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';


function App() {
  const history = useHistory({forceRefresh: true});
  const location = useLocation();

  const [allCards, setAllCardsState] = useState([]);
  const [sortedCards, setSortedCardsState] = useState([]);
  const [shortCards, setShortCardsState] = useState([]);
  const [savedCards, setSavedCardsState] = useState([]);
  const [sortedSavedCards, setSortedSavedCardsState] = useState([]);
  const [shortSavedCards, setShortSavedCardsState] = useState([]);

  const [queryMovies, setQueryMovies] = useState({
    input: '',
    validate: false,
  });
  const [querySavedMovies, setQuerySavedMovies] = useState({
    input: '',
    validate: false,
  });
  const [isShortMovie, setShortMovieState] = useState(false);
  const [isShortSavedMovie, setShortSavedMovieState] = useState(false);

  const [menuPopupOpen, setMenuPopupState] = useState(false);
  const [infoTooltipPopupOpen, setInfoTooltipPopupState] = useState(false);
  const [infoTooltip, setInfoTooltipState] = useState(false);

  const [loggedIn, setLoggedInState] = useState(false);
  const [loading, setLoadingState] = useState(false);
  const [error, setErrorState] = useState(false);
  const [currentUser, setCurrentUserState] = useState({
    _id: '',
    name: '',
    email: '',
  });

  // попапы
  function handleMenuPopupClick() {
    setMenuPopupState(true);
  }

  function closePopup() {
    setMenuPopupState(false);
    setInfoTooltipPopupState(false);
  }

  // обработчик Escape и overlay
  useEffect(() => {
    const closeByEscape = (evt) => {
      if(evt.key === 'Escape') {
        closePopup();
      };
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  useEffect(() => {
    const closeByOverlay = (evt) => {
      if(evt.target.classList.contains('menuPopup_opend')) {
        closePopup();
      };
    };
    document.addEventListener('click', closeByOverlay);
    return () => document.removeEventListener('click', closeByOverlay);
  }, []);

  // фильмы
  function getAllMovies() {
      setLoadingState(true);
      moviesApi.getMoviesData()
      .then((data) => {
        setLoadingState(false);
        setAllCardsState(data);
      })
      .catch((err) => {console.log(err)})
  };

  function getSortedMoviesFromAllCards (query) {
    setSortedCardsState(sortMovies(allCards, query));
  };

  function getSortedMoviesFromSavedCards (query) {
    setSortedSavedCardsState(sortMovies(savedCards, query));
  };

  const getShortMovies = useCallback(() => {
    setShortCardsState(sortShortMovies(sortedCards));
  }, [sortedCards]);

  const getShortSavedMovies =useCallback(() => {
    if(querySavedMovies.input === '') {
      setShortSavedCardsState(sortShortMovies(savedCards))
    } else {
      setShortSavedCardsState(sortShortMovies(sortedSavedCards))
    }
  }, [querySavedMovies.input, savedCards, sortedSavedCards]);

  useEffect(() => {
    if (localStorage.allMovies !== undefined) {
    setAllCardsState(JSON.parse(localStorage.allMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allMovies', JSON.stringify(allCards))
  }, [allCards]);

  useEffect(() => {
    if (localStorage.sortedCards !== undefined) {
    setSortedCardsState(JSON.parse(localStorage.sortedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sortedCards', JSON.stringify(sortedCards))
    if(isShortMovie) {
      getShortMovies()
    }
  }, [sortedCards, isShortMovie, getShortMovies]);

  useEffect(() => {
    if (localStorage.shortCards !== undefined) {
    setShortCardsState(JSON.parse(localStorage.shortCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shortCards', JSON.stringify(shortCards))
  }, [shortCards]);

  useEffect(() => {
    if (localStorage.savedCards !== undefined) {
    setSavedCardsState(JSON.parse(localStorage.savedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
    if(isShortSavedMovie) {
      getShortSavedMovies()
    }
  }, [savedCards, isShortSavedMovie, getShortSavedMovies]);

  useEffect(() => {
    if (localStorage.sortedSavedCards !== undefined) {
    setSortedSavedCardsState(JSON.parse(localStorage.sortedSavedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sortedSavedCards', JSON.stringify(sortedSavedCards));
    if(isShortSavedMovie) {
      getShortSavedMovies()
    };
  }, [sortedSavedCards, isShortSavedMovie, getShortSavedMovies]);

  useEffect(() => {
    if (localStorage.shortSavedCards !== undefined) {
    setShortSavedCardsState(JSON.parse(localStorage.shortSavedCards));
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('shortSavedCards', JSON.stringify(shortSavedCards));
  }, [shortSavedCards]);
  
  

  //форма поиска фильмов
  useEffect(() => {
    if (localStorage.queryMovies !== undefined) {
    setQueryMovies(JSON.parse(localStorage.queryMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('queryMovies', JSON.stringify(queryMovies))
  }, [queryMovies]);

  useEffect(() => {
    if (localStorage.isShortMovie !== undefined) {
    setShortMovieState(JSON.parse(localStorage.isShortMovie));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isShortMovie', JSON.stringify(isShortMovie))
  }, [isShortMovie]);

  useEffect(() => {
    if (localStorage.querySavedMovies !== undefined) {
    setQuerySavedMovies(JSON.parse(localStorage.querySavedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('querySavedMovies', JSON.stringify(querySavedMovies))
  }, [querySavedMovies]);

  useEffect(() => {
    if (localStorage.isShortSavedMovie !== undefined) {
    setShortSavedMovieState(JSON.parse(localStorage.isShortSavedMovie));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isShortSavedMovie', JSON.stringify(isShortSavedMovie))
  }, [isShortSavedMovie]);

  function handleInputMoviesChange(evt) {
    setQueryMovies({ input: evt.target.value, validate: false });
  };

  function handleInputSavedMoviesChange(evt) {
    setQuerySavedMovies({ input: evt.target.value, validate: false });
  };

  function handleMoviesSearchSubmit(evt) {
    evt.preventDefault();
    if(!queryMovies.input){
      return setQueryMovies({...queryMovies, validate: true});
    };
    getSortedMoviesFromAllCards(queryMovies);
  };

  function handleSavedMoviesSearchSubmit(evt) {
    evt.preventDefault();
    if(!querySavedMovies.input){
      return setQuerySavedMovies({...querySavedMovies, validate: true});
    };
    getSortedMoviesFromSavedCards(querySavedMovies);
  };

  function handleCheckboxMoviesChange(isShortMovie) {
    setShortMovieState(isShortMovie);
  };

  function handleCheckboxSavedMoviesChange(isShortSavedMovie) {
    setShortSavedMovieState(isShortSavedMovie);
  };

  // сохранение и удаление фильмов
  function saveMovie(cardData) {
    mainApi.createMovie(cardData)
    .then((res) => {
      setSavedCardsState(savedCards.concat(res.data));
    })
    .catch((err) => {console.log(err)})
  };

  function deleteMovie(id) {
    mainApi.removeMovie(id)
    .then(() => {
      localStorage.removeItem('savedCards')
      getSavedMovies();
    })
    .catch((err) => {console.log(err)})
  };

  function getSavedMovies() {
    mainApi.getMovies()
    .then((res) => {
      setSavedCardsState(res);
    })
    .catch((err) => {console.log(err)})
  };

  // проверка авторизации
  useEffect(() => {
    if(!loggedIn){
      mainApi.getUserData()
      .then((res) => {
        setCurrentUserState({
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email,
        })
        setLoggedInState(true);
        if (location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/movies') {
          history.push('/movies');
        } else if (location.pathname === '/saved-movies') {
          history.push('/saved-movies');
        } else if (location.pathname === '/profile') {
          history.push('/profile')
        }
      })
      .catch((err) => {
        console.log(err);
      })
    };
  }, [history, location.pathname, loggedIn]);

  // регистрация
  function handleRegisterSubmit(name, email, password) {
    mainApi.register(name, email, password)
    .then((res) => {
      handleLoginSubmit(email, password)
    })
    .catch((err) => {
      setErrorState(true);
      setLoggedInState(false);
      console.log(err);
    });
  };

  // вход 
  function handleLoginSubmit(email, password) {
    mainApi.login(email, password)
    .then((res) => {
      setCurrentUserState({
        _id: res.data._id,
        name: res.data.name,
        email: res.data.email,
      });
      setLoggedInState(true);
      setErrorState(false);
      history.push('/movies');
      getAllMovies();
      getSavedMovies();
    })
    .catch((err) => {
      setLoggedInState(false);
      setErrorState(true);
      console.log(err);
    });
  };

  //выход
  function handleLogout() {
    mainApi.logout()
    .then((res) => {
      setCurrentUserState({
        _id: '',
        name: '',
        email: '',
      })
      localStorage.removeItem('allMovies');
      localStorage.removeItem('sortedCards');
      localStorage.removeItem('sortedSavedCards');
      localStorage.removeItem('queryMovies');
      localStorage.removeItem('querySavedMovies');
      localStorage.removeItem('isShortMovie');
      localStorage.removeItem('isShortSavedMovie');
      setLoggedInState(false);
      history.push('/');
      window.location.reload();

    })
    .catch((err) => console.log(err))
  };

  //редактировать профиль
  function handleEditButton(name, email) {
    mainApi.updateUser(name, email)
    .then((res) => {
      setInfoTooltipPopupState(true);
      if(res) {
        setInfoTooltipState(true)
        setCurrentUserState({
          name: res.data.name,
          email: res.data.email,
        })
      }
    })
    .catch((err) => {
      console.log(err);
      setInfoTooltipPopupState(true);
      setInfoTooltipState(false);
    })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <Switch>
        <Route exact path="/" >
          <div className="app app_color_pink">
            {loggedIn ? <Navigation onMenuPopup = {handleMenuPopupClick} /> : <Header />}
          </div>
          <Main />
          <Footer />
        </Route>

        <ProtectedRoute  
        path="/movies"
        component = {Movies}
        page = {"movies"}
        isLoggedIn = {loggedIn}
        onMenuPopup = {handleMenuPopupClick}
        cards = {sortedCards}
        shortCards = {shortCards}
        saveMovie = {saveMovie}
        savedCards = {savedCards}
        sortedSavedCards = {sortedSavedCards}
        deleteMovie = {deleteMovie}
        query = {queryMovies}
        onInputChange = {handleInputMoviesChange}
        onSubmit = {handleMoviesSearchSubmit}
        isShortMovie = {isShortMovie}
        onCheckboxChange = {handleCheckboxMoviesChange}
        isLoading = {loading} />

        <ProtectedRoute 
        path="/saved-movies"
        component = {SavedMovies}
        page = {"saved-movies"}
        isLoggedIn = {loggedIn}
        onMenuPopup={handleMenuPopupClick}
        cards = {savedCards}
        shortCards = {shortSavedCards}
        savedCards = {savedCards}
        sortedSavedCards = {sortedSavedCards}
        deleteMovie = {deleteMovie}
        query = {querySavedMovies}
        onInputChange = {handleInputSavedMoviesChange}
        onSubmit = {handleSavedMoviesSearchSubmit}
        isShortMovie = {isShortSavedMovie}
        onCheckboxChange = {handleCheckboxSavedMoviesChange}
        isLoading = {loading} />

        <ProtectedRoute 
        path="/profile"
        component = {Profile}
        isLoggedIn = {loggedIn}
        onMenuPopup = {handleMenuPopupClick}
        onLogoutSubmit = {handleLogout}
        onEditButton = {handleEditButton} />

        <Route path="/signin">
          <Login onLoginSubmit = {handleLoginSubmit} isError={error} />
        </Route>

        <Route path="/signup">
          <Register onRegisterSubmit={handleRegisterSubmit} isError={error} />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

    <MenuPopup 
      isOpen={menuPopupOpen}
      onClose={closePopup}
    />
    <InfoTooltip
      isOpen={infoTooltipPopupOpen}
      onClose={closePopup}
      isInfoTooltip={infoTooltip}
    />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
