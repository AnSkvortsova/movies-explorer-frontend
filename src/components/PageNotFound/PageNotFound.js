import React from 'react';
import { Link } from 'react-router-dom';

export function PageNotFound() {
  return (
    <article className="pageNotFound">
      <div className="pageNotFound__main">
        <h1 className="pageNotFound__title">404</h1>
        <p className="pageNotFound__subtitle">Страница не найдена</p>
      </div>
      <Link to="/" className="pageNotFound__link">Назад</Link>
    </article>
  );
}