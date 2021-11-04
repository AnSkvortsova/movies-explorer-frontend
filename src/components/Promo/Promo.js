import promoImg from '../../images/promo.png';

export function Promo() {
  return (
    <article className="promo app__section">
      <section className="app__flex">
        <div className="promo__text">
          <h1 className="promo__title">Учебный проект студента факультета <br /> Веб-разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className="promo__img" src={promoImg} alt="промо картинка" />
      </section>
      <a className="promo__link" href="#aboutProject__title">Узнать больше</a>
    </article>
  );
}
