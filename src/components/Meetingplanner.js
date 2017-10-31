import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Meetingplanner extends React.Component {
  constructor(props) {
    super(props);

  } 

render() {
    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>Haptic and e-commerce</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button" className="sliderB">Back to listing</button></div></Link>
        <Slider/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>FRAMEWORKS AND TOOLS</h3>
            <hr id="miniheadLine"/>
            <div><p>-HTML + bootstrap and CSS for layout and design</p>
            <p>-AngularJs for development of application</p>
            <p>-Firebase as databse and google accounts</p>
            <p>-Open weatcher map API</p>
            <p>-MVC pattern</p>
          </div>
          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>

          <div><p>This is a Meeting planner/schedule program made in a course called "Interaction programming and the dynamik webb". Me, and a friend from my class made this website together with two people from the computer science program. It is a program made for planning you daily meetings and other things that happens during your work day. <a href="https://github.com/evelinalaroussi/iprog"> Github repo</a></p></div>

          </div>
      </div>
    </div>
)
}
};


// Try out some settings live!

var Carousel = require('nuka-carousel');

class Slider extends React.Component {
  mixins: [Carousel.ControllerMixin];
  render() {
    return (
      <Carousel dragging={true}>
        <img src="/work_images/meetingplanner.png"/>
        <img src="/work_images/meetingplanner3.png"/>
        <img src="/work_images/meetinplanner2.png"/>
      </Carousel>
    )
  }
};