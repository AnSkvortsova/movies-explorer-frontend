import './App.css';
import { Header } from '../Header/Header'; 
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer'; 

function App() {
  return (
    <div className="app">
      <div className="app app_color_pink">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
