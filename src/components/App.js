import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Work from './Work';
import Thissite from './Thissite';
import Maps from './Maps';
import Glass from './Glass';
import Kthres from './Kthres';
import Haptik from './Haptik';
import Iris from './Iris';
import Unichat from './Unichat';

//import s from '../styles/app.style';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/head" component={Header} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/thissite" component={Thissite} />
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/glass" component={Glass} />
        <Route exact path="/kthres" component={Kthres} />
        <Route exact path="/haptik" component={Haptik} />
        <Route exact path="/iris" component={Iris} />
        <Route exact path="/unichat" component={Unichat} />

      </Switch>
    </div>
  );
}
