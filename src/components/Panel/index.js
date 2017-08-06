import React, {Component} from 'react';

import PanelImage from './PanelImage';

require('./index.scss');

export default class Panel extends Component {

  render() {
    return(
      <div className="app-Panel">
        <PanelImage />
        <div className="app-Panel-container">
          <div className="app-Panel-content">
            Under Construction! :)
          </div>
        </div>
      </div>
    );
  }
}
