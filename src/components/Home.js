import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';



function linkto() {
  window.location = "head"
};


export default class Home extends React.Component {

    constructor(props) {
    super(props);
    this.state = {show: "noShow", show2: "start-logo"};
  }

    render() {


    setTimeout(() => {
        this.setState({show: "yesShow", show2: "noShow"})
    }, 6000)

    if (window.innerWidth>1093 && window.innerHeight<590){
          var oh = "auto";
          var h = "auto";
          console.log("1");
    }

    else if (window.innerWidth>1093 && window.innerHeight>590){
          var oh = "100%";
          var h = "auto";
          console.log("2");
    }
    

    else if(window.innerWidth<window.innerHeight && window.innerWidth<1093) {
          var oh = "100%";
          var h = 750+"px";
          console.log("3");
    }

    else {
      var oh = "auto";
      var h = 750+"px";
      console.log("4");
    }
    

    return (
      <div id="container">
      <div id="container1" className={this.state.show2}>
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


        <div id="container2" className={this.state.show}>
        <div className="outerH-container" style={{height:oh}}>
          <div><img className="logo-img" src="./logo.png"/></div>
          <div className="innerH-container">
              <div className="header-text">
              <h2>Evelina Laroussi</h2>
              <p>Who am i? </p>
              </div>
                <img className="header-img" src="./cv.jpg"/>
          
                <div className="header-hr"><hr id="ett"/><hr id="tva"/></div>
          
                <div className="desc-text">
                <p>Hi, I am a student at KTH in Stockholm Sweden, doing my best to become a great engineer with a master in interactive mediatechnology. I am currently at the last (5th) year and will soon be looking for the next chapter in my career. I like <strong>front-end developing</strong>, but i also have a thing for <strong>interaction design</strong>. Some say you can't do both... <span id="bigger">I say of course you can!</span></p>
            </div>
        
          </div>
      
          <div className="circles" style={{height: h}}><Link to={`/About`}><div id="c1" >About.</div></Link><Link to={`/example`}><div id="c2" >Work.</div></Link><Link to={`/example`}><div id="c3">Contact.</div></Link></div>

      </div>
      </div>
      </div>

)}
};
