import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
//import { Code } from '../styles/style';
//import s from '../styles/home.style';

import Icon from 'react-icons-kit';

    //import icons

 import { arrowLeft } from 'react-icons-kit/icomoon';

function Contact () {


    return (
      <div className="contact-container">

    <div className="icon-head"><Link to="/head"><img className="logo-img" src="./logo.png"/></Link><p id="back"> <Icon icon={arrowLeft}/> BACK</p></div>
    <div className="head">I WOULD LOVE TO HEAR FROM YOU</div>
    <hr id="headLine"/>
    <div className="contact-content">
    <div id="evelinaAnim"><img src="./icons/evelina_anim.png"/></div>
    <div id="logo-images">
    <a href="mailto:evelinalaroussi@gmail.com"><img id="email" src="./icons/email.png"/></a>
    <a href="https://www.linkedin.com/in/evelina-laroussi-1b98b5bb/"><img id="email" src="./icons/linkedin.png"/></a>
    <a href="https://www.facebook.com/evelina.laroussi"><img id="email" src="./icons/facebook.png"/></a>
    </div>
    <br className="clear" />
    </div>

    </div>
    );
  };


export default Contact;