export function Profile() {
  return (
    <article className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <fieldset className="profile__sectionName app__flex">
          <label className="profile__label" for="userName">Имя</label>
          <input className="profile__input" id="userName" placeholder="Виталий" />
        </fieldset>
         <div className="app__lineG"></div>
        <fieldset className="profile__sectionMail app__flex">
          <label className="profile__label" for="userMail">E-mail</label>
          <input className="profile__input" id="userMail" placeholder="pochta@yandex.ru" />
        </fieldset>
        <button className="profile__button">Редактировать</button>
      </form>
      <button className="profile__button profile__button_signout">Выйти из аккаунта</button>
    </article>
  );
}