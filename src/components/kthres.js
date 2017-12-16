import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Kthres extends React.Component {
  constructor(props) {
    super(props);

  } 

render() {
    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>KTH travel</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button" className="sliderB">Back to listing</button></div></Link>
        <Slider/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>METHODS</h3>
            <hr id="miniheadLine"/>
            <div><p>- Litterature reserch</p>
            <p>- Interviewing</p>
            <p>- Walktrhoughs</p>
            <p>- Sketching</p>
            <p>- Prototyping</p>
            <p>- Working iterative</p>
            </div>
          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>

          <div><p>This project is made in a course called Methods for Interaction design. Our assignment was to redesign an existing system at KTH. We got the system KTH-RES, which is a system for booking travels and filling out travel expenses for staff. The reason for making this projects was because the current system has gotten many complains and is not very user friendly according to most users. Before staring to develop a prototype we conducted interviews and made walk-troughs on the current system to recognize both problems and user goals. After working with our prototype we did usability testing and further interviews to get feedback before finishing it. Pictures of bot the current system and our prototype are displayed in the image carousel. <a href="https://www.weld.io/kth-res">Prototype</a></p></div>

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
        <img src="/work_images/kthres.png"/>
        <img src="/work_images/kthres1.png"/>
        <img src="/work_images/kthres3.png"/>
      </Carousel>
    )
  }
};