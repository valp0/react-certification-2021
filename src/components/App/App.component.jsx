import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header';

import HomePage from '../../pages/Home';
import Player from '../../pages/Player';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';

// Image from https://pic.onlinewebfonts.com/svg/img_333639.png
import noAcc from './user_not-logged-in.png';
import StateProvider from '../../providers/State';
import Layout from '../Layout/Layout.component';

function App() {

  const [query, setQuery] = useState("wizeline");
  const [avatarSrc] = useState(noAcc);

  function updateSearch(newSearch) {
    setQuery(newSearch);
  }

  return (
    <BrowserRouter>
      <StateProvider>
        <Header handler={updateSearch} avatar={avatarSrc} />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage query={query} />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route exact path="/watch/:id">
              <Player />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
