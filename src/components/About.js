import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

function About () {

    return (
<div id="container" style={{height: ""}}>
<div><Link to="/head"><img className="logo-img" src="./logo_white.png"/></Link></div>
<div className="head">ABOUT ME</div>
<hr id="headLine"/>

    <div className="meContainer">
          <div id="meText">
            <p>What i like the most about working with media technology is the impact it has in people. I think it is interesting to work with developing new concepts and to reach many people at the same time. The media technology industry is growing everyday and is an important part of our future. <span id="bigger">It is simply a development that i want to be a part of.</span> </p>
            <p>As a front end developer, i truly enjoy the vision of an application or website coming together piece by piece. I love being challenged and learn more coding to get a broader skillset. Even though i love coding, i also have an intresst for interaction design.</p>
      
            <p>I am currently working as a front-end developer and UX designer at <a href="www.twebcast.com">Twebcast</a></p>
          </div>
      </div>


  <div className = "skillcontainer">
    <dl className="skills-diagram">
      <dt className="skill-5">ReactJS</dt>
      <dd>5</dd>
      <dt className="skill-10">HTML & CSS</dt>
      <dd>10</dd>
      <dt className="skill-3">SQL</dt>
      <dd>3</dd>
      <dt className="skill-8">InteractionDesign</dt>
      <dd>8</dd>
      <dt className="skill-4">Photoshop</dt>
      <dd>4</dd>
      <dt className="skill-11">Python</dt>
      <dd>4</dd>
      <dt className="skill-6">JQuery</dt>
      <dd>6</dd>
      <dt className="skill-7">AngularJS</dt>
      <dd>7</dd>
      <dt className="skill-9">Javascript</dt>
      <dd>9</dd>
      <dt className="skill-2">Java</dt>
      <dd>2</dd>
    </dl>
  </div>

</div>
    );
  };


export default About;