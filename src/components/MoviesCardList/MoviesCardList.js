import { MoviesCard } from '../MoviesCard/MoviesCard';


export function MoviesCardList(props) {
  return (
    <section className="moviesCardList app__section">
      {props.cardsData.map((card) => (
        <MoviesCard 
        key={card.id}
        card={card}
        />
      ))}
      <button className="moviesCardList__button">Ещё</button>
    </section>
  );
}