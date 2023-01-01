import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Acters, NavBar, Movies, Footer, Profile, MovieInfo } from './';

export default function App() {
  return (
    <div className="main">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="home">Home page </div>
        </Route>
        <Route exact path="/actors/:id">
          <Acters />
        </Route>
        <Route exact path="/movie/:id">
          <Movies />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/infos/:id">
          <MovieInfo />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
