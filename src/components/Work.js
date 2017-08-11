import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Work extends React.Component {
  constructor(props) {
    super(props);

    this.hover = this.hover.bind(this);
    this.state = {active: false};
  } 


  hover(name) {
    const currentState = this.state.active
    this.setState({active: !currentState});
  }

  nohover(name){
    this.setState({show: "noShow"});
  }

render() {
    return (
      <div id="container">
        <div id="work-container">
          <div><img className="logo-img" src="./logo.png"/></div>
          <div className="head">MY WORK AND PROJECTS</div>
          <hr id="headLine"/>
          <div className="images">
            <div className="workImg" id="portfolio"><p>This site...</p><img src="./logo.png" onMouseEnter={this.hover.bind(this, 'portfolio')} onMouseLeave={this.nohover.bind(this, 'portfolio')}/></div>
            <div className="workImg" id="beer"><p>hej</p><img src="./work_images/imgglass1.jpg" onMouseEnter={this.hover.bind(this, 'beer')} onMouseLeave={this.nohover.bind(this, 'beer')}/></div>
            <div className="workImg" id="maps"><p>hej</p><img src="./work_images/maps.png" onMouseEnter={this.hover.bind(this, 'maps')} onMouseLeave={this.nohover.bind(this, 'maps')}/></div>
            <div className="workImg" id="kthres"><p>hej</p><img src="./work_images/kthres.png" onMouseEnter={this.hover.bind(this, 'kthres')} onMouseLeave={this.nohover.bind(this, 'kthres')}/></div>
            <div className="workImg" id="haptik"><p>hej</p><img src="./work_images/haptik.png" onMouseEnter={this.hover.bind(this, 'haptik')} onMouseLeave={this.nohover.bind(this, 'haptik')}/></div>
            <div className="workImg" id="iris"><p>hej</p><img src="./work_images/iris.png" onMouseEnter={this.hover.bind(this, 'iris')} onMouseLeave={this.nohover.bind(this, 'iris')}/></div>
            <div className="workImg" id="unichat"><p>hej</p><img src="./work_images/unichat.png" onMouseEnter={this.hover.bind(this, 'unischat')} onMouseLeave={this.nohover.bind(this, 'unichat')}/></div>
            <div className="workImg" id="meetingplanner"><p>hej</p><img src="./work_images/meetingplanner.png" onMouseEnter={this.hover.bind(this, 'meetingplanner')}onMouseLeave={this.nohover.bind(this, 'meetingplanner')}/></div>
            <div className="workImg" id="stroller"><p>hej</p><img src="./work_images/stroller.png" onMouseEnter={this.hover.bind(this, 'stroller')} onMouseLeave={this.nohover.bind(this, 'stroller')}/></div>
            <div className="workImg" id="recept"><p>hej</p><img src="./work_images/recept.png" onMouseEnter={this.hover.bind(this, 'recept')} onMouseLeave={this.nohover.bind(this, 'recept')}/></div>
          </div>
        </div>
    </div>
)
}
  };
