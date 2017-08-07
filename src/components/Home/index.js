import React, {Component} from 'react';
import {Desktop} from 'constants/Breakpoints';

import Panel from 'components/Panel';
import Footer from 'components/Footer';

require('./index.scss');

export default class Home extends Component {

  render() {
    return(
      <div className="app-Home">
        <h1>Hi! I&rsquo;m Jose.</h1>
        <h1>I code, write, and study<Desktop><span> at <a href="https://vt.edu" target="__blank" referece="noopener">Virtginia Tech</a></span></Desktop>.</h1>
        <Panel/>
        <Footer/>
      </div>
    );
  }
}
