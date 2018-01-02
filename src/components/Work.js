import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

import Icon from 'react-icons-kit';

    //import icons

import { arrowLeft } from 'react-icons-kit/icomoon';

export default class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: " "};
  } 


  hover(event) {
  
    this.setState({ name: event.currentTarget.dataset.tag });
  }

  nohover(){
        this.setState({ name: " "});
  }

  handleClick(name){
    window.location.href = "/work/"+name; 
  }


render() {

  if(window.innerWidth<450){
    console.log("HJ");
    window.scrollTo(0, 0)
  }

    return (
      <div id="container">
        <div id="work-container">
          <div className="icon-head"><Link to="/head"><img className="logo-img" src="./logo.png"/></Link><p id="back"><Icon icon={arrowLeft}/> BACK</p></div>
          <div className="head">MY WORK AND PROJECTS</div>
          <hr id="headLine"/>
          <div className="images">
            <div className="workImg" id="womens" onClick={this.handleClick.bind(this, 'womens')}><p> {this.state.name=="Womens" ? "Womens Health": " "} </p><img src="./work_images/mens2.png"  data-tag="Womens" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="sleepover" onClick={this.handleClick.bind(this, 'sleepover')}><p> {this.state.name=="Sleepover" ? "Sleepover Buddy": " "} </p><img src="./work_images/panda.jpg"  data-tag="Sleepover" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="igor" onClick={this.handleClick.bind(this, 'igor')}><p> {this.state.name=="Igor" ? "Igor": " "} </p><img src="./work_images/igor.JPG"  data-tag="Igor" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="portfolio" onClick={this.handleClick.bind(this, 'thissite')}><p> {this.state.name =="Portfolio" ? "This site": " "} </p><img src="./logo_white.png"  data-tag="Portfolio" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="tweb"  onClick={this.handleClick.bind(this, 'twebcast')}><p>{this.state.name == "Twebb" ? "Twebcast" : " "}</p><img src="./work_images/twebb4.png" data-tag="Twebb" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="beer" onClick={this.handleClick.bind(this, 'glass')}><p>{this.state.name == "Beer" ? "Interactive glass" : " "}</p><img src="./work_images/imgglass1.jpg" data-tag="Beer" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="maps" onClick={this.handleClick.bind(this, 'maps')}><p>{this.state.name == "Maps" ? "My maps" : " "}</p><img src="./work_images/maps.png" data-tag="Maps" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this, 'maps')}/></div>
            <div className="workImg" id="kthres" onClick={this.handleClick.bind(this, 'kthres')}><p>{this.state.name == "Res" ? "KTH-travel" : " "}</p><img src="./work_images/kthres.png" data-tag="Res" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="haptik" onClick={this.handleClick.bind(this, 'haptik')}><p>{this.state.name == "Haptik" ? "Haptic e-commerce" : " "}</p><img src="./work_images/haptik.png" data-tag="Haptik" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="iris" onClick={this.handleClick.bind(this, 'iris')}><p>{this.state.name == "Iris" ? "Cooking with Iris" : " "}</p><img src="./work_images/iris.png" data-tag="Iris" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="unichat" onClick={this.handleClick.bind(this, 'unichat')}><p>{this.state.name == "Uni" ? "UniChat" : " "}</p><img src="./work_images/unichat.png" data-tag="Uni" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="meetingplanner" onClick={this.handleClick.bind(this, 'meetingplanner')}><p>{this.state.name == "Meetingplanner" ? "Meetingplanner" : " "}</p><img src="./work_images/meetingplanner.png" data-tag="Meetingplanner" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="stroller" onClick={this.handleClick.bind(this, 'rollerstroller')}><p>{this.state.name == "Roller" ? "RollerStroller" : " "}</p><img src="./work_images/stroller.png" data-tag="Roller" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
            <div className="workImg" id="recept" onClick={this.handleClick.bind(this, 'recipe')}><p>{this.state.name == "Recept" ? "Recipe website" : " "}</p><img src="./work_images/recept.png" data-tag="Recept" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.nohover.bind(this)}/></div>
          </div>
        </div>
    </div>
)
}
  };
