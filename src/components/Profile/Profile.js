import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Navigation } from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <Navigation onMenuPopup = {props.onMenuPopup} />
      <main className="profile__main">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>

        <Formik
        initialValues = {{
          name: '',
          email: '',
        }}
        validationSchema = {Yup.object({
          name: Yup.string()
            .matches(/^[a-zа-я -]+$/i, 'Для имени допустимы символы кириллицы, латиницы, пробел и дефис')
            .min(2, 'Мало символов')
            .max(20, 'Много символов')
            .required('Поле обязательно для заполнения'),
          email: Yup.string()
            .email('Неверный адрес электронной почты')
            .required('Поле обязательно для заполнения'),
        })}
        onSubmit = {(values, {resetForm}) => {
          props.onEditButton(values.name, values.email);
          resetForm({
            name: '',
            email: '',
          });
        }}>
          {props => {
            return (
              <Form className="profile__form">
                <fieldset className="profile__inputs">
                  <div className="profile__section">
                    <label className="profile__label" htmlFor="name">Имя</label>
                    <Field 
                    className="profile__input" 
                    name="name" 
                    type="text" 
                    placeholder={currentUser.name} />
                  </div>
                  <div className="profile__error">
                    <ErrorMessage name="name" />
                  </div>

                  <div className="app__lineG"></div>
                  <div className="profile__section">
                    <label className="profile__label" htmlFor="email">E-mail</label>
                    <Field 
                    className="profile__input" 
                    name="email" 
                    type="email" 
                    placeholder={currentUser.email} />
                  </div>
                  <div className="profile__error">
                    <ErrorMessage name="email" />
                  </div>
                </fieldset>

                <button 
                className="profile__button" 
                disabled={props.values.name === currentUser.name ? "disabled" 
                  : props.values.email === currentUser.email ? "disabled" 
                  : !props.isValid ? "disabled" : ''} 
                aria-label="Редактировать" 
                type="submit">Редактировать</button>
              </Form>
            )}}
        </Formik>
        
        {props.isError ? (<p className="profile__formError">Что-то пошло не так...</p>) : ''}

        <button 
        className="profile__button profile__button_signout" 
        type="button" 
        onClick={props.onLogoutSubmit}
        aria-label="выйти из аккаунта">Выйти из аккаунта</button>
      </main>
    </div>
  );
}