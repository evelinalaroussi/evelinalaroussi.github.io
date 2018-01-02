import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import Thissite from './Thissite';
import Maps from './Maps';
import Glass from './Glass';
import Kthres from './Kthres';
import Haptik from './Haptik';
import Iris from './Iris';
import Unichat from './Unichat';
import Meetingplanner from './Meetingplanner';
import Roller from './Roller';
import Recipe from './Recipe';
import Tweb from './Tweb';
import Igor from './Igor';
import Womens from './Womens';
import Sleepover from './Sleepover';
//import s from '../styles/app.style';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/head" component={Header} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/work/thissite" component={Thissite} />
        <Route exact path="/work/maps" component={Maps} />
        <Route exact path="/work/glass" component={Glass} />
        <Route exact path="/work/kthres" component={Kthres} />
        <Route exact path="/work/haptik" component={Haptik} />
        <Route exact path="/work/iris" component={Iris} />
        <Route exact path="/work/unichat" component={Unichat} />
		    <Route exact path="/work/meetingplanner" component={Meetingplanner} />
		    <Route exact path="/work/rollerstroller" component={Roller} />
	      <Route exact path="/work/recipe" component={Recipe} />
	      <Route exact path="/work/twebcast" component={Tweb} />
        <Route exact path="/work/igor" component={Igor} />
        <Route exact path="/work/womens" component={Womens} />
        <Route exact path="/work/sleepover" component={Sleepover} />



      </Switch>
    </div>
  );
}
