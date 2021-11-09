import arrow from '../../images/arrow.svg';

export function Portfolio() {
  return (
    <article className="portfolio app__section">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
      <li className="portfolio__item">
        <p className="portfolio__text">Статичный сайт</p>
        <a className="portfolio__link" href="https://github.com/AnSkvortsova/how-to-learn" target="_blank" rel="noreferrer">
          <img className="portfolio__arrow" src={arrow} alt="стрелка" />
        </a>
      </li>
      <div className="app__lineG"></div>
      <li className="portfolio__item">
        <p className="portfolio__text">Адаптивный сайт</p>
        <a className="portfolio__link" href="https://github.com/AnSkvortsova/russian-travel" target="_blank" rel="noreferrer">
          <img className="portfolio__arrow" src={arrow} alt="стрелка" />
        </a>
      </li>
      <div className="app__lineG"></div>
      <li className="portfolio__item">
        <p className="portfolio__text">Одностраничное приложение</p>
        <a className="portfolio__link" href="https://github.com/AnSkvortsova/react-mesto-api-full" target="_blank" rel="noreferrer">
          <img className="portfolio__arrow" src={arrow} alt="стрелка" />
        </a>
      </li>
      </ul>
    </article>
  );
}