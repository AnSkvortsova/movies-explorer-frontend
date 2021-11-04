import React from 'react';
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

function App() {
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
          <Navigation />
          <Movies />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Navigation />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Navigation />
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
    </div>
  );
}

export default App;
