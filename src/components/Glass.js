import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Glass extends React.Component {
  constructor(props) {
    super(props);

  } 



render() {

    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>The interactive drinking glass</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button">Back to listing</button></div></Link>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/25ME518MO3I" frameborder="0" allowfullscreen></iframe>
        <img id="misuse" src="/work_images/misuse.png"/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>METHODS & TOOLS</h3>
            <hr id="miniheadLine"/>
            <div>
            <p>- Reflective interaction design process</p>
            <p>- Physical prototyping</p>
            <p>- Photoshop</p>
            <p>- iMovie</p>
          </div>

      </div>
          <div className="desc"><h3>DESCRIPTION</h3>
            <hr id="miniheadLine"/>
            <div><p>This project is made in a course called Interaction design as reflective practice. The design process started with us choosing a random object without knowing what to do with it later. We, thereafter, dug deeper into the intended use of the object and then all the misuses we could ever imagine. One misuse where choosen, my group chose rituals and more particulary "cheering with someone", and the focus was on the social aspects of it. Then, an interactive prototype evolved, based on the choosen misuse. The main learning experience was to trust the design process itself and reflect on the experience you have in every step. Reflective design is all about the perception of a product and it's use. It is all in the mind of the beholder</p></div>

          </div>
      </div>
   </div>
)
}
  };
