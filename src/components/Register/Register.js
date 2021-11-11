import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Logo } from '../Logo/Logo';

export function Register() {
  return (
    <article className="input">
      <div className="input__logoWrapper">
        <Logo />
      </div>
      <h1 className="input__title">Добро пожаловать!</h1>

      <Formik
        initialValues = {{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema = {Yup.object({
          name: Yup.string()
            .matches(/^[a-zа-я -]+$/i, 'Для имени допустимы символы кириллицы, латиницы, пробел и дефис')
            .max(20, 'Слишком много знаков')
            .required('Поле обязательно для заполнения'),
          email: Yup.string()
            .email('Неверный адрес электронной почты')
            .required('Поле обязательно для заполнения'),
          password: Yup.string()
            .min(6, 'Нужно больше знаков')
            .required('Поле обязательно для заполнения'),
        })}
        onSubmit = {(values) => {
          console.log(values);
        }}
      >

        {props => {
          return (
            <Form className="input__form" >
              <fieldset className="input__fieldset">
                <div className="input__wrapper">
                  <label className="input__label" htmlFor="name">Имя</label>
                  <Field
                  className="input__content" 
                  name="name" 
                  type="text" 
                  placeholder="Виталий"
                  />
                  <div className="input__error">
                    <ErrorMessage name="name" />
                  </div>
                </div>

                <div className="input__wrapper">
                  <label className="input__label" htmlFor="email">E-mail</label>
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
                  <label className="input__label" htmlFor="password">Пароль</label>
                  <Field 
                  className={`input__content ${props.errors.password ? 'input__passwordError' : ''}`}
                  name="password"
                  type="password" 
                  />
                  <div className="input__error">
                    <ErrorMessage name="password" />
                  </div>
                </div>
              </fieldset>
              <button 
              className={`input__button ${!props.isValid ? 'input__button_error' : ''}`} 
              disabled={!props.isValid ? "disabled" : ''} 
              type="submit">Зарегистрироваться</button>
            </Form>
              )}}
      </Formik>

      <p className="input__text">
        Уже зарегистрированы?
        <Link className="input__link" to="/signin">Войти</Link>
      </p>
        
    </article>
  );
}
