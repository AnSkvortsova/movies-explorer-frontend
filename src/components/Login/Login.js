import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { Logo } from '../Logo/Logo';
import { ValidationSchema } from '../../utils/ValidationSchema';

export function Login() {
  return (
    <article className="input">
      <div className="input__logoWrapper">
        <Logo />
      </div>
      <h1 className="input__title">Рады видеть!</h1>

      <Formik
        initialValues = {{
          email: '',
          password: '',
        }}
        validationSchema = {ValidationSchema}
        onSubmit = {(values) => {
          console.log(values);
        }}
      >
        {props => {
          return (
            <Form className="input__form">
              <fieldset className="input__fieldset">
                <div className="input__wrapper">
                  <label className="input__label" htmlFor="userMail">E-mail</label>
                  <Field 
                  className="input__content" 
                  name="email" 
                  type="email" 
                  placeholder="pochta@yandex.ru" />
                  <div className="input__error">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="input__wrapper">
                  <label className="input__label" htmlFor="userPassword">Пароль</label>
                  <Field 
                  className={`input__content ${props.errors.password ? 'input__passwordError' : ''}`} 
                  name="password" 
                  type="password" />
                  <div className="input__error">
                    <ErrorMessage name="password" />
                  </div>
                </div>
              </fieldset>
              <button 
              className={`input__button ${!props.isValid ? 'input__button_error' : ''}`} 
              disabled={!props.isValid ? "disabled" : ''} 
              aria-label="Войти"
              type="submit">Войти</button>
            </Form>
          )}}
      </Formik>

      <p className="input__text">
        Ещё не зарегистрированы?
        <Link className="input__link" to="/signup">Регистрация</Link>
      </p>
    </article>
  );
}