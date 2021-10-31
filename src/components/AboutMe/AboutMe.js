import photo from '../../images/photo.jpg';

export function AboutMe() {
  return (
    <article className="aboutMe app__section">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="app__lineB"></div>
      <section className="app__flex">
        <div className="aboutMe__content">
          <h3 className="aboutMe__name">Анастасия</h3>
          <p className="aboutMe__subtitle">Фронтенд-разработчик, 34 года</p>
          <p className="aboutMe__text">Мир IT многогранен и вездесущ и, если ты в нем, то у тебя больше понимания об окружении и больше возможностей. Я выбрала для себя web-разработку как точку входа в этот мир. Для этого я прохожу курс в Яндекс Практикуме, помимо основных занятий принимаю участие во внутренних конкурсах и проектах для некоммерческих организаций, читаю учебник на learn.javascript, статьи на habr и medium, книги Код Чарльза Петцольда, Выразительный JavaScript Марейн Хавербеке, смотрю образовательные видео на каналах JSConf, Академия Яндекса, Владелен Минин.
          Моя предыдущая должность - архитектор, и я не понаслышке знаю о сроках и умею с этим работать. 
          Так же для меня важна социальная составляющая, хочу работать в команде и быть полезной. 
          А еще у меня есть пунктик с пунктиками: обожаю ставить галочки «выполнено». 
          </p>
          <a className="aboutMe__link" href=" https://github.com/AnSkvortsova" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="aboutMe__img" src={photo} alt="фотография" />
      </section>
    </article>
  );
}