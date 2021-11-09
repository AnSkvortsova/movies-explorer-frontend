import React from 'react';
import { NavLink } from 'react-router-dom';

import closeIcon from '../../images/close-icon.svg';
import { AccountButton } from '../AccountButton/AccountButton';

export function MenuPopup(props) {
  return (
    <div className={`menuPopup ${props.isOpen ? 'menuPopup_opend' : ''}`}>
      <div className="menuPopup__container">
        <button className="menuPopup__closeButton" type="button" aria-label="закрыть меню" onClick={props.onClose}>
          <img className="menuPopup__closeIcon" src={closeIcon} alt="кнопка закрыть" />
        </button>
        <ul className="menuPopup__list">
          <li className="menuPopup__link">
            <NavLink exact to="/" className="menuPopup__linkPassive" activeClassName="menuPopup__linkActive" onClick={props.onClose}>Главная</NavLink>
          </li>
          <li className="menuPopup__link">
            <NavLink to="/movies" className="menuPopup__linkPassive" activeClassName="menuPopup__linkActive" onClick={props.onClose}>Фильмы</NavLink>
          </li>
          <li className="menuPopup__link">
            <NavLink to="/saved-movies" className="menuPopup__linkPassive" activeClassName="menuPopup__linkActive" onClick={props.onClose}>Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <div className="menuPopup__accountButton" onClick={props.onClose}>
          <AccountButton />
        </div>
      </div>
    </div>
  );
}