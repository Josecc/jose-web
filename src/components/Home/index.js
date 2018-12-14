import React, {Component} from 'react';
import {Desktop} from 'constants/Breakpoints';

import Panel from 'components/Panel';
import Footer from 'components/Footer';

require('./index.scss');

export default class Home extends Component {

  render() {
    return(
      <div className="app-Home">
        <h1>Hellooo! I&rsquo;m Jose.</h1>
        <h1>I love coding, writing, and reading. Below you'll find a collection of some thoughts and interests.</h1>
        <Panel/>
        <Footer/>
      </div>
    );
  }
}
