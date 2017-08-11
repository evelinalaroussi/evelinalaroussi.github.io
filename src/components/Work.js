import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

function Work () {

  

    return (
      <div id="container">
        <div id="work-container">
          <div><img className="logo-img" src="./logo.png"/></div>
          <div className="head">MY WORK AND PROJECTS</div>
          <hr id="headLine"/>
          <div className="images">
            <img className="workImg" id="beer" src="./work_images/imgglass1.jpg"/>
            <img className="workImg" id="unichat" src="./work_images/unichat.png"/>
            <img className="workImg" id="meetingplanner" src="./work_images/meetingplanner.png"/>
            <img className="workImg" id="maps" src="./work_images/maps.png"/>
            <img className="workImg" id="kthres" src="./work_images/kthres.png"/>
            <img className="workImg" id="iris" src="./work_images/iris.png"/>
            <img className="workImg" id="stroller" src="./work_images/stroller.png"/>

          </div>
        </div>
    </div>
)
  };


export default Work;