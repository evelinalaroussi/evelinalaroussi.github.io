import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Roller extends React.Component {
  constructor(props) {
    super(props);

  } 



render() {

    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="./logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>THIS SITE</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button">Back to listing</button></div></Link>
        <img id="strollerimg" src="./work_images/stroller.png"/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>WHAT I USED</h3>
            <hr id="miniheadLine"/>
            <div><p>- Field study, interviews</p>
            <p>- Developing personas</p>
            <p>- Developing scenarios</p>
            <p>- Prototyping lo-fi</p>
            <p>- Hueristic evaluation with walktrhough</p>
            <p>- Prototyping hi-fi in "just in mind"</p>
            <p>- Pluralistic walktrhough and thinkaloud</p>

            </div>

          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>
          <div><p>Stroller Roller is an application for parents traveling with a stroller on buses. With this application, traveller’s can see if there is space for them which allows them to make smarter transportation choices. Also the traveller’s can communicate with the bus driver when they need to get on and off the bus for example letting the driver know that the bus needs to be lowered. </p></div>

          </div>
      </div>
    </div>
)
}
  };
