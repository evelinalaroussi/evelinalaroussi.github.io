import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';
  import Icon from 'react-icons-kit';

    //import icons

 import { arrowLeft } from 'react-icons-kit/icomoon';

function About () {

  window.scrollTo(0, 0);

    if (window.innerWidth>1020 && window.innerHeight>1300){
      var oh = "100%"
    }

    else {
      var oh = "auto";

    }
    

    return (
    <div id="c" className="about-cont" style={{height:oh}}>
    <div className="icon-head"><Link to="/head"><img className="logo-img" src="./logo.png"/></Link><p id="back"> <Icon icon={arrowLeft}/> BACK</p></div>
    <div className="head">ABOUT ME</div>
    <hr id="headLine"/>

    <div className="meContainer">
          <div id="meText">
            <p>What I like the most about working with media technology is the impact it has in people. I think it is interesting to work with developing new concepts and to reach many people at the same time. The media technology industry is growing everyday and is an important part of our future. <span id="bigger">It is simply a development that i want to be a part of.</span> </p>
            <p>As a front-end developer, I truly enjoy the vision of an application or website coming together piece by piece. I love being challenged and learn more coding to get a broader skillset. Even though I love coding, I also have an intresst for interaction design.</p>
          </div>
      </div>


  <div className = "skillcontainer">
    <dl className="skills-diagram">
      <dt className="skill-8" id="about-image"></dt>
      <dd>8</dd>
      <dt className="skill-5">ReactJS</dt>
      <dd>5</dd>
      <dt className="skill-10">HTML & CSS</dt>
      <dd>10</dd>
      <dt className="skill-3">SQL</dt>
      <dd>3</dd>
      <dt className="skill-8">InteractionDesign</dt>
      <dd>8</dd>
      <dt className="skill-4">PS</dt>
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