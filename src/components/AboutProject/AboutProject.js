export function AboutProject() {
  return (
    <article className="aboutProject app__section">
      <h2 className="aboutProject__title" id="aboutProject__title">О проекте</h2>
      <div className="app__lineB"></div>
      <section className="app__flex">
        <div className="aboutProject__content">
          <h3 className="aboutProject__contentTitle">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__contentText">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__content">
          <h3 className="aboutProject__contentTitle">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__contentText">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </section>
      <section className="aboutProject__grid">
        <div className="aboutProject__weeks">
          <div className="aboutProject__week">
            <p className="aboutProject__textBox aboutProject__textBox_white">1 неделя</p>
          </div>
          <p className="aboutProject__text">Back-end</p>
        </div>
        <div className="aboutProject__weeks">
          <div className="aboutProject__week aboutProject__week_grey">
            <p className="aboutProject__textBox">4 недели</p>
          </div>
          <p className="aboutProject__text">Front-end</p>
        </div>
      </section>
    </article>
  );
}