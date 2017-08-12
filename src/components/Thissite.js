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
      <div className = "this-img">
        <div className="head"><p>THIS SITE</p></div>
        <hr id="headLine"/>
        <div className="button-div"><button id="button">Back to listing</button></div>
        <img id="mcbook" src="./work_images/mcbook2.png"/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>WHAT I USED</h3>
            <hr id="miniheadLine"/>
            <p>ReactJS + react routing</p>
            <p>CSS</p>

          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>
          <p>I built this portfolio over the summer as a project to learn react, but also to improve my design skills </p>

          </div>
      </div>
    </div>
)
}
  };
