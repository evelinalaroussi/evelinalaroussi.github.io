import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

export default class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {port:" ", beer: " ", maps: " ", kthres: " ", haptik: " ", iris: " ", unichat: " ", meetingplanner: " ", stroller: " ", recept: " "};
  } 


  hover(name) {

    if (name == "portfolio"){
      this.setState({port:"This site"})
    }
    if (name == "maps"){
      this.setState({maps:"My maps"})
    }
    if (name == "kthres"){
      this.setState({kthres:"KTH travel"})
    }
    if (name == "haptik"){
      this.setState({haptik:"Haptic e-commerce"})
    }
    if (name == "iris"){
      this.setState({iris:"Cooking with iris"})
    }
    if (name == "unichat"){
      this.setState({unichat:"UniChat"})
    }
        if (name == "beer"){
      this.setState({beer:"The interactive glass"})
    }
        if (name == "meetingplanner"){
      this.setState({meetingplanner:"Meetingplanner"})
    }
        if (name == "stroller"){
      this.setState({stroller:"RollerStroller"})
    }
        if (name == "recept"){
      this.setState({recept:"Recipe website"})
    }

  }

  nohover(name){

    if (name == "portfolio"){
      this.setState({port:""})
    }
    if (name == "maps"){
      this.setState({maps:""})
    }
    if (name == "kthres"){
      this.setState({kthres:""})
    }
    if (name == "haptik"){
      this.setState({haptik:""})
    }
    if (name == "iris"){
      this.setState({iris:""})
    }
    if (name == "unichat"){
      this.setState({unichat:""})
    }
        if (name == "beer"){
      this.setState({beer:""})
    }
        if (name == "meetingplanner"){
      this.setState({meetingplanner:""})
    }
        if (name == "stroller"){
      this.setState({stroller:""})
    }
        if (name == "recept"){
      this.setState({recept:""})
    }

    
  }

render() {

  if(window.innerWidth<450){
    console.log("HJ");
    window.scrollTo(0, 0)
  }

    return (
      <div id="container">
        <div id="work-container">
          <Link to="/head"><div><img className="logo-img" src="./logo.png"/></div></Link>
          <div className="head">MY WORK AND PROJECTS</div>
          <hr id="headLine"/>
          <div className="images">
            <Link to={`/thissite`}><div className="workImg" id="portfolio"><p> {this.state.port} </p><img src="./logo_white.png" onMouseEnter={this.hover.bind(this, 'portfolio')} onMouseLeave={this.nohover.bind(this, 'portfolio')}/></div></Link>
            <div className="workImg" id="beer"><p>{this.state.beer}</p><img src="./work_images/imgglass1.jpg" onMouseEnter={this.hover.bind(this, 'beer')} onMouseLeave={this.nohover.bind(this, 'beer')}/></div>
            <div className="workImg" id="maps"><p>{this.state.maps}</p><img src="./work_images/maps.png" onMouseEnter={this.hover.bind(this, 'maps')} onMouseLeave={this.nohover.bind(this, 'maps')}/></div>
            <div className="workImg" id="kthres"><p>{this.state.kthres}</p><img src="./work_images/kthres.png" onMouseEnter={this.hover.bind(this, 'kthres')} onMouseLeave={this.nohover.bind(this, 'kthres')}/></div>
            <div className="workImg" id="haptik"><p>{this.state.haptik}</p><img src="./work_images/haptik.png" onMouseEnter={this.hover.bind(this, 'haptik')} onMouseLeave={this.nohover.bind(this, 'haptik')}/></div>
            <div className="workImg" id="iris"><p>{this.state.iris}</p><img src="./work_images/iris.png" onMouseEnter={this.hover.bind(this, 'iris')} onMouseLeave={this.nohover.bind(this, 'iris')}/></div>
            <div className="workImg" id="unichat"><p>{this.state.unichat}</p><img src="./work_images/unichat.png" onMouseEnter={this.hover.bind(this, 'unichat')} onMouseLeave={this.nohover.bind(this, 'unichat')}/></div>
            <div className="workImg" id="meetingplanner"><p>{this.state.meetingplanner}</p><img src="./work_images/meetingplanner.png" onMouseEnter={this.hover.bind(this, 'meetingplanner')}onMouseLeave={this.nohover.bind(this, 'meetingplanner')}/></div>
            <div className="workImg" id="stroller"><p>{this.state.stroller}</p><img src="./work_images/stroller.png" onMouseEnter={this.hover.bind(this, 'stroller')} onMouseLeave={this.nohover.bind(this, 'stroller')}/></div>
            <div className="workImg" id="recept"><p>{this.state.recept}</p><img src="./work_images/recept.png" onMouseEnter={this.hover.bind(this, 'recept')} onMouseLeave={this.nohover.bind(this, 'recept')}/></div>
          </div>
        </div>
    </div>
)
}
  };
