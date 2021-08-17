import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <App className={'app'} />
  </React.StrictMode>,
  document.getElementById('root')
);
