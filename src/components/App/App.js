import './App.css';
import { Header } from '../Header/Header'; 
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer'; 
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

function App() {
  return (
    <div className="app">
      <div className="app app_color_pink">
        <Header />
      </div>
      <Main />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default App;
