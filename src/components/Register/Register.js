import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';

export function Register() {
  return (
    <article className="input">
      <div className="input__logoWrapper">
        <Logo />
      </div>
      <h1 className="input__title">Добро пожаловать!</h1>
      <form className="input__form">
        <fieldset className="input__fieldset">
          <div className="input__wrapper">
            <label className="input__label" for="userName">Имя</label>
            <input className="input__content" id="userName" type="text" minLength="2" maxLength="30" required placeholder="Виталий" />
          </div>
          <div className="input__wrapper">
            <label className="input__label" for="userMail">E-mail</label>
            <input className="input__content" id="userMail" type="email" required placeholder="pochta@yandex.ru" />
          </div>
          <div className="input__wrapper">
            <label className="input__label" for="userPassword">Пароль</label>
            <input className="input__content" id="userPassword" type="password" minLength="8" required />
          </div>
        </fieldset>
        <button className="input__button">Зарегистрироваться</button>
      </form>
      <p className="input__text">
        Уже зарегистрированы?
        <Link className="input__link" to="/signin">Войти</Link>
      </p>
    </article>
  );
}