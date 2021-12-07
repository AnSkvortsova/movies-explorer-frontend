import { React, useState, useEffect } from 'react';
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { sortMovies } from '../../utils/sortMovies';

import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';


function App() {
  const history = useHistory({forceRefresh: true});
  const location = useLocation();

  const [allCards, setAllCardsState] = useState([]);
  const [sortedCards, setSortedCardsState] = useState([]);
  const [savedCards, setSavedCardsState] = useState([]);

  const [loggedIn, setLoggedInState] = useState(false);
  const [loading, setLoadingState] = useState(false);
  const [error, setErrorState] = useState(false);
  const [currentUser, setCurrentUserState] = useState({
    _id: '',
    name: '',
    email: '',
  });

  // попапы
  const [isMenuPopupOpen, setMenuPopupState] = useState(false);

  function handleMenuPopupClick() {
    setMenuPopupState(true);
  }

  function closeMenuPopup() {
    setMenuPopupState(false);
  }

  // обработчик Escape и overlay
  useEffect(() => {
    const closeByEscape = (evt) => {
      if(evt.key === 'Escape') {
        closeMenuPopup();
      };
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  useEffect(() => {
    const closeByOverlay = (evt) => {
      if(evt.target.classList.contains('menuPopup_opend')) {
        closeMenuPopup();
      };
    };
    document.addEventListener('click', closeByOverlay);
    return () => document.removeEventListener('click', closeByOverlay);
  }, []);

  // фильмы
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
  }, [sortedCards]);

  useEffect(() => {
    if (localStorage.savedCards !== undefined) {
    setSavedCardsState(JSON.parse(localStorage.savedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedCards', JSON.stringify(savedCards))
  }, [savedCards]);
  
  function getAllMovies() {
      setLoadingState(true);
      moviesApi.getMoviesData()
      .then((data) => {
        setLoadingState(false);
        setAllCardsState(data);
      })
      .catch((err) => {console.log(err)})
  };

  function getSortedMovies (query) {
    setSortedCardsState(sortMovies(allCards, query));
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
      setSavedCardsState(res.movies);
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
        if (location.pathname === '/signin') {
          history.push('/movies');
        } else {
          history.push(location.pathname);
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
      if(res.ok) {
      setLoggedInState(true);
      setErrorState(false);
      history.push('/movies');
      getAllMovies();
    }})
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
      setCurrentUserState({
          name: res.data.name,
          email: res.data.email,
        })
    })
    .catch((err) => console.log(err))
  };

  console.log('localStorage ', localStorage)

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
        onSearch = {getSortedMovies}
        onCheckboxChange = {getSortedMovies}
        cards = {sortedCards}
        saveMovie = {saveMovie}
        savedCards = {savedCards}
        deleteMovie = {deleteMovie}
        isLoading = {loading} />

        <ProtectedRoute 
        path="/saved-movies"
        component = {SavedMovies}
        page = {"saved-movies"}
        isLoggedIn = {loggedIn}
        onMenuPopup={handleMenuPopupClick}
        onSearch = {getSortedMovies}
        onCheckboxChange = {getSortedMovies}
        cards = {savedCards}
        savedCards = {savedCards}
        deleteMovie = {deleteMovie}
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
      isOpen={isMenuPopupOpen}
      onClose={closeMenuPopup}
    />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
