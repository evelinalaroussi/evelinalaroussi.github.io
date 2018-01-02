import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Sleepover extends React.Component {
  constructor(props) {
    super(props);

  } 



render() {

    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>Sleepover Buddy - interactive toy for children with separation anxiety</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button">Back to listing</button></div></Link>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/74K0bihOPPs" frameborder="0" allowfullscreen></iframe>
        <img id="sleepover_screens" src="/work_images/sleepover.png"/>

      </div>
      <div className="this-text">
          <div className="tech">
            <h3>FRAMEWORKS AND TOOLS</h3>
            <hr id="miniheadLine"/>
            <div>
            <p>- Arduino UNO + feather huzzah with wifi connection </p>
            <p>- LED lights, speaker, heatpad and vibrator motors (and a lot of wires) </p>
            <p>- javascript, HTML and CSS for working application</p>
            <p>- Invision and illustrator for not wokring prototype and design</p>
          </div>

      </div>
          <div className="desc"><h3>DESCRIPTION</h3>
            <hr id="miniheadLine"/>
            <div><p>Sleepover buddy is a Hifi-prototype of an interactive toy made for children with separation anxiety and their parents. The product contains of an application (for the parents) and three physical modules (for the children).  The three modules consist of the four modalities light, sound, vibration and heat, and they can be attached to soft toys or other soft surfaces. The modalites are connected to the application in which special messages can be created, for example "my favourite" could be pink pulsing light with heartbeat vibration, heat and purring sound. When the children are away from their parents and feel anxious they can push a button at one of the modules and a notification is sent to the parents phones. Thye can then answer the child with the costum messages and the modalities will be active during a selected period of time. My part of the project was to develope the application and connect it to the physical electronics. </p></div>

          </div>
      </div>
   </div>
)
}
  };
