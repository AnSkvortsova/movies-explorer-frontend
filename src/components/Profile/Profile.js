import { Navigation } from '../Navigation/Navigation';

export function Profile(props) {
  return (
    <div className="profile">
      <Navigation onMenuPopup = {props.onMenuPopup} />
      <main className="profile__main">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <fieldset className="profile__inputs">
            <div className="profile__section">
              <label className="profile__label" htmlFor="userName">Имя</label>
              <input className="profile__input" id="userName" type="text" minLength="2" maxLength="30" required placeholder="Виталий" />
            </div>
             <div className="app__lineG"></div>
            <div className="profile__section">
              <label className="profile__label" htmlFor="userMail">E-mail</label>
              <input className="profile__input" id="userMail" type="email" required placeholder="pochta@yandex.ru" />
            </div>
          </fieldset>
          <button className="profile__button">Редактировать</button>
        </form>
        <button 
        className="profile__button profile__button_signout" 
        type="button" 
        onClick={props.onLogoutSubmit}
        aria-label="выйти из аккаунта">Выйти из аккаунта</button>
      </main>
    </div>
  );
}