import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Iris extends React.Component {
  constructor(props) {
    super(props);

  } 



render() {

    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="./logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>Cooking with Iris</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button">Back to listing</button></div></Link>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/h9BJzEpLytA" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>WHAT I USED</h3>
            <hr id="miniheadLine"/>
            <div><p>- IrisTK, a XML and Java based speech recognition program</p>
            <p>- API called recipe puppy </p>
          </div>

      </div>
          <div className="desc"><h3>DESCRIPTION</h3>
            <hr id="miniheadLine"/>
            <div><p>Cooking with Iris is a speech recognition application made in a course called "Multimodal interactions and interfaces".  It is an application made for helping out in the kitchen by suggesting recipes based on the ingredients you have at home. The idea is that you should be able to look in the fridge at the same time as you are searching for recipes by speaking to the system and describing what you have at home.</p></div>

          </div>
      </div>
   </div>
)
}
  };
