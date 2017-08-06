import React, {Component} from 'react';
import {Desktop} from 'constants/Breakpoints';

import Panel from 'components/Panel';
import Footer from 'components/Footer';

require('./index.scss');

export default class Home extends Component {

  render() {
    return(
      <div className="app-Home">
        <h1>Hi! I'm Jose.</h1>
        <h1>I code, write, and study<Desktop><span> at <a href="https://vt.edu" target="__blank" ref="noopener">Virtginia Tech</a></span></Desktop>.</h1>
        <p className="app-Home-text">
          Here&rsquo;s an ungorganized collection of intensly interesting items:
          <Desktop><span className="app-Home-text-light"> (not really too intense, I just like the alliteration)</span></Desktop>
        </p>
        <Panel/>
        <Footer/>
      </div>
    );
  }
}
