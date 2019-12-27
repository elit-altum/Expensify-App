import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found-container">
    <div className="not-found-content">
      <div className="not-found-content__title">404 Error. Page Not Found.</div>
      <Link to="/" className="not-found-content__link">Dashboard</Link>
    </div>
  </div>
);

export default NotFoundPage;
