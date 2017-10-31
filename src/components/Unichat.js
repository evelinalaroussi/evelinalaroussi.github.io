import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Unichat extends React.Component {
  constructor(props) {
    super(props);

  } 

render() {
    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>UniChat</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button" className="sliderB">Back to listing</button></div></Link>
        <Slider/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>FRAMEWORKS AND TOOLS</h3>
            <hr id="miniheadLine"/>
            <div>
            <p>- Geolocation, to make the app based on location</p>
            <p>- Pubnub, for chat function</p>
            <p>- Firebase, database</p>
            <p>- Angular, CSS and Bootstrap, for developing and layout</p>
            </div>
          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>

          <div><p>This webb-application is project work made in a course called "Mobile development and webb technologies". It is a chatroom for students where you can ask questions related to different courses. It is location based and you can only reach the chatrooms when you are at a university.<a href="https://github.com/evelinalaroussi/uniChat">Github repo</a></p></div>

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
        <img src="/work_images/unichat.png"/>
        <img src="/work_images/unichat2.png"/>
      </Carousel>
    )
  }
};