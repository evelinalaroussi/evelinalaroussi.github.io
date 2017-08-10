import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

function linkto() {

  window.location= "head";
};

function Home() {




    setTimeout(() =>linkto(), 6000)
    

    return (
      <div id="container" className="start-logo">
        <img src="./logo.png"/>
        <div className="start-text">
          <span id="span1">Hi, </span>
          <span id="span2">nice </span>
          <span id="span3">to </span><br/>
          <span id="span4">see </span>
          <span id="span5">you </span>
          <span id="span6">here!</span>
        </div>
      </div>
)};

export default Home;