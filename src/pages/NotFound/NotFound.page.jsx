import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.styles.css';

function NotFoundPage() {

  const style = { "textAlign": "center" };

  return (
    <section className="not-found" style={style}>
      <Link to="/" className="home-link">
        home
      </Link>
      <h3>Whoops! It seems this page does not exist!</h3>
      <img src="404.gif" alt="page not found" />
    </section>
  );
}

export default NotFoundPage;
