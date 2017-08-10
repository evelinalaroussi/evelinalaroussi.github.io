import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Header from './Header';
import About from './About';
//import s from '../styles/app.style';

export default function App() {
  return (
    <div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/head" component={Header} />
        <Route exact path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>

    </div>
  );
}
