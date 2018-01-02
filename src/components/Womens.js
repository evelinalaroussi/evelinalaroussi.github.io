import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Womens extends React.Component {
  constructor(props) {
    super(props);

  } 



render() {

    return (
      <div id="siteContainer" className="thissite">
      <Link to="/head"><div><img className="logo-img" src="/logo.png"/></div></Link>

      <div className = "this-img">
        <div className="head"><p>Womens Health - interactive survey</p></div>
        <hr id="headLine"/>
        <Link to="/work"><div className="button-div"><button id="button">Back to listing</button></div></Link>
        <iframe width="560" height="315" src="https://drive.google.com/file/d/1SIMrC3-dE6GOjggrYoTx7zoAJgFBc1Ys/preview"></iframe>
      </div>
      <div className="this-text">
          <div className="tech">
            <h3>FRAMEWORKS AND TOOLS</h3>
            <hr id="miniheadLine"/>
            <div>
            <p>- Javascript/Jquery </p>
            <p>- HTML, CSS and SVG </p>
            <p>- MongoDB </p>
            <p>- MongoLab and Heroku for hosting </p>
          </div>

      </div>
          <div className="desc"><h3>DESCRIPTION</h3>
            <hr id="miniheadLine"/>
            <div><p>Visit the <a href="https://menskth.herokuapp.com/">website</a></p>
            <p>This project is made in a course called "Advanced project course" with he purpose to gather research data for researches made at KTH within the area of womens health. We wanted to design and develope an interactive and dynamic survey with playful elements to motivate people to take the survey and to answer truthfully. The main goal of the research that we are supporting are to educate people about womens health and to make the topic less taboo!</p>  
            </div>

          </div>
      </div>
   </div>
)
}
  };
