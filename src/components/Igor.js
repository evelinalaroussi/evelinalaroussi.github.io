import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Igor extends React.Component {
  constructor(props) {
    super(props);

  } 



render() {

    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>IGOR - interactive grocery reminder</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button">Back to listing</button></div></Link>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9wwAoJ7c9n8" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>FRAMEWORKS AND TOOLS</h3>
            <hr id="miniheadLine"/>
            <div><p>For instructable: <a href="https://prezi.com/view/d0ODHWrtreGsppGkuHLU/"> click here</a></p>
            <p>- Arduino UNO </p>
            <p>- RFID technolgy </p>
            <p>- LED light </p>
            <p>- Speaker</p>
            <p>- Thermal printer </p>
            <p>- 3D printing </p>
            <p>- Lasercutting </p>
            <p>- and much more... </p>
          </div>

      </div>
          <div className="desc"><h3>DESCRIPTION</h3>
            <hr id="miniheadLine"/>
            <div><p>Igor is an interactive board created in a course called "Physical interactiondesign". Igor is tangible and supposed to be placed in the kitchen. When you notice that something is missing in your fridge, you take the corresponding magnet and place it on the "must buy" - side of the board. When you are ready to go to the store, you just push the print button and you have your grocery list! </p></div>

          </div>
      </div>
   </div>
)
}
  };
