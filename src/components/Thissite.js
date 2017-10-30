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
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>THIS SITE</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button">Back to listing</button></div></Link>
        <img id="mcbook" src="/work_images/mcbook2.png"/>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>FRAMEWORKS</h3>
            <hr id="miniheadLine"/>
            <div><p>- ReactJS & react routing</p>
            <p>- CSS</p></div>

          </div>
          <div className="desc"><h3>DESCRIPTION</h3>
          <hr id="miniheadLine"/>
          <div><p>I built this portfolio over the summer as a project to learn react, but also to improve my design skills </p></div>

          </div>
      </div>
    </div>
)
}
  };
