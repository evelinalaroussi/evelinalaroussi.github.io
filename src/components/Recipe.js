import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Recipe extends React.Component {
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
            <h3>FRAMEWORKS</h3>
            <hr id="miniheadLine"/>
            <div><p>-Rss feed, makes it possible to subscribe for the website and get latest recipes</p>
            <p>-MySQL database, to save all recipes that users create</p>
            <p>-php, HTML, CSS and XML, to developer and design the website</p>
          </div>
          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>

          <div><p>This website is the first i ever have made in a course called "XML for publication". It is a recipe website where you can search for recipes, log in on your own page and create new recipes.</p></div>

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
        <img src="/work_images/recept.png"/>
        <img src="/work_images/recept1.png"/>
        <img src="/work_images/recept2.png"/>
      </Carousel>
    )
  }
};