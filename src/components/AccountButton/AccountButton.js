import React from 'react';
import { Link } from 'react-router-dom';

import accountIcon from '../../images/account-icon.svg';

export function AccountButton() {
  return(
    <Link to="/profile" className="accountButton">
      <div className="accountButton__text">Аккаунт</div>
      <img className="accountButton__icon" src={accountIcon} alt="иконка аккаунта" />
    </Link>
  );
}