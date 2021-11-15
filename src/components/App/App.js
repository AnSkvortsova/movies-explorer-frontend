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
  const getCards = JSON.parse(localStorage.getItem('movies'));

  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = (query) => {
    setLoading(true)
    moviesApi.search(query)
    .then((data) => {
      setLoading(false)
      setCardsData(data)
      localStorage.setItem('movies', JSON.stringify(cardsData))
    })
    .catch((err) => {console.log(err)});
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
          cards = {getCards}
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
          <Register />
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
