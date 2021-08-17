import React from 'react';

import './NotFound.styles.css';

function NotFoundPage() {

  const style = { "textAlign": "center" };

  return (
    <section className="not-found" style={style}>
      <div style={{ fontWeight: "600", paddingTop: "20px", marginBottom: "20px" }} >Whoops! It seems this page does not exist!</div>
      <img src="404.gif" alt="page not found" />
    </section >
  );
}

export default NotFoundPage;
