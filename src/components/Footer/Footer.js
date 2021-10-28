export function Footer() {
  return (
    <footer className="footer app__section">
      <p className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="app__lineG"></div>
      <section className="app__flex">
        <p className="footer__copyright">&copy; 2021</p>
        <nav className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
          <a className="footer__link" href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
        </nav>
      </section>
    </footer>
  );
}