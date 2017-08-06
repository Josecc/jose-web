import React, {Component} from 'react';

import DesktopImage from 'assets/animals-desktop.png';
import TabletImage from 'assets/puppies-tablet.png';
import MobileImage from 'assets/dog-mobile.png';
import {Desktop, Tablet, Mobile} from 'constants/Breakpoints';

require('./index.scss');

export default class Panel extends Component {

  render() {
    return(
      <div className="app-Panel">
        <div className="app-Panel-image">
          <Desktop><img src={DesktopImage}/></Desktop>
          <Tablet><img src={TabletImage}/></Tablet>
          <Mobile><img src={MobileImage}/></Mobile>
        </div>
        test
      </div>
    );
  }
}
