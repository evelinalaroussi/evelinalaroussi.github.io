import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Tweb extends React.Component {
  constructor(props) {
    super(props);

  } 

render() {
    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>Twebcast  moderator system</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button" className="sliderB">Back to listing</button></div></Link>
        <p id="twebbP">The first four images is the new system and the last two images is the old system</p>
        <Slider/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>FRAMEWORKS</h3>
            <hr id="miniheadLine"/>
            <div><p>-HTML and CSS for layout</p>
            <p>-Jquery for developing new features</p>
          </div>
          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>

          <div><p>This is a project that i have worked with during three months as a front-end developer and UX designer at Twebcast. I have redesigned the system and added features, susch as the list view and timeline view. The system is for moderating events for clients.</p></div>

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
        <img className="twebimg" src="/work_images/twebb3.png"/>
        <img className="twebimg" src="/work_images/twebb4.png"/>
        <img className="twebimg" src="/work_images/twebb2.png"/>
        <img className="twebimg" src="/work_images/twebb1.png"/>
        <img className="twebimg" src="/work_images/twebb.png"/>
        <img className="twebimg" src="/work_images/twebb5.png"/>
      </Carousel>
    )
  }
};