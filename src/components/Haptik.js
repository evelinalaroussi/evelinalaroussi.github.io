import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Haptik extends React.Component {
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
            <h3>METHODS AND FRAMEWORKS</h3>
            <hr id="miniheadLine"/>
            <div><p>-Litterature research</p>
            <p>-Development of haptic environment, using Blender for 3D moddeling and chai3D (c++ library) as developing language</p>
            <p>-HTML + bootstrap & CSS for layout of e-commerce website</p>
            <p>-User evaluation including questinnairesand think aloud session</p>
          </div>
          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>

          <div><p>This project is made in a course namned Haptics. The e-commerce market is a fast expanding market, however the return rate among customers are fairly high. Research has been done suggesting that one of the reasons could be the lack of haptic input, meening imput you recieve by touch. This project is covering a research of whether haptic features could enhance the online shopping experience for customers. An online shop for couches has been developed as well as a virtual environment where the participants could experience the feel of different materials of a couch. The haptic imputs comes from using a haptic phantom, or falcon,  device. </p></div>

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
        <img src="/work_images/haptik2.png"/>
      </Carousel>
    )
  }
};