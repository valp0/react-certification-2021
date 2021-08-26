import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header';

import HomePage from '../../pages/Home';
import Player from '../../pages/Player';
import FavPlayer from '../../pages/FavPlayer'
import NotFound from '../../pages/NotFound';
import Favorites from '../../pages/Favorites';
import Private from '../Private';

// Image from https://pic.onlinewebfonts.com/svg/img_333639.png
import AppearanceProvider from '../../providers/Appearance';
import AccountProvider from '../../providers/Account';
import Layout from '../Layout/Layout.component';
import SearchProvider from '../../providers/Search/Search.provider';

function App() {

  return (
    <BrowserRouter>
      <AppearanceProvider>
        <AccountProvider>
          <SearchProvider>
            <Header />
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Private exact path="/favorites">
                  <Favorites />
                </Private>
                <Private exact path="/favorites/:id">
                  <FavPlayer />
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
          </SearchProvider>
        </AccountProvider>
      </AppearanceProvider>
    </BrowserRouter>
  );
}

export default App;
