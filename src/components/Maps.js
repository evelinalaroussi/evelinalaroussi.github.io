import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Work extends React.Component {
  constructor(props) {
    super(props);

  } 

render() {
    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>MY MAPS</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button" className="sliderB">Back to listing</button></div></Link>
        <Slider/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>FRAMEWORKS</h3>
            <hr id="miniheadLine"/>
            <div><p>-AngularJs for frontend</p>
            <p>-NodeJs + express for server side</p>
            <p>-HTML + CSS for layout</p>
            <p>-Javascript for developing the map application </p>
            <p>-google maps API</p>
            <p>-Firebase as database</p>
            <p>-MVC as pattern</p></div>
          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>

          <div><p>This website is the result of a project in a course called internetprogramming. It is a social media website where you can create maps, place multiple pins on it, and share it with others by having people following you and follow them back. To try it out: <a href="https://github.com/evelinalaroussi/internetprogrammering">Github repository</a></p></div>

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
        <img src="/work_images/maps.png"/>
        <img src="/work_images/maps1.png"/>
        <img src="/work_images/maps3.png"/>
        <img src="/work_images/maps4.png"/>
        <img src="/work_images/maps2.png"/>
      </Carousel>
    )
  }
};