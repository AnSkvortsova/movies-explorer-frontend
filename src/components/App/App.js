import { React, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { Header } from '../Header/Header'; 
import { Navigation } from '../Navigation/Navigation';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer'; 
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { MenuPopup } from '../MenuPopup/MenuPopup';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';


function App() {
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

  // movies
  const [allCardsData, setAllCardsDataState] = useState([]);
  const [cardsData, setCardsDataState] = useState([]);
  const [loading, setLoadingState] = useState(false);

  const getAllCards = JSON.parse(localStorage.getItem('allMovies'));

  const onSearch = (query) => {
    if(getAllCards.length === 0) {
      getAllMovies();
    }
    setCardsDataState(
      getAllCards.filter(card => card.nameRU.toLowerCase().includes(query.input))
    );
  };

  const getAllMovies = () => {
    setLoadingState(true);
    moviesApi.search()
    .then((data) => {
      setLoadingState(false);
      setAllCardsDataState(data);
      localStorage.setItem('allMovies', JSON.stringify(allCardsData))
    })
    .catch((err) => {console.log(err)});
  };

  // регистрация
  function handleRegisterSubmit(password, email) {

  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <div className="app app_color_pink">
            <Header />
          </div>
          <Main />
          <Footer />
        </Route>

        <Route path="/movies">
          <Navigation 
            onMenuPopup={handleMenuPopupClick}
          />
          <Movies 
          onSearch = {onSearch}
          cards = {cardsData}
          isLoading = {loading} />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Navigation 
            onMenuPopup={handleMenuPopupClick}
          />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Navigation 
            onMenuPopup={handleMenuPopupClick}
          />
          <Profile />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register onRegisterSubmit={handleRegisterSubmit} />
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
  );
}

export default App;
