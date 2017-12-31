import React, {Component} from 'react';

import PanelImage from './PanelImage';
import Content from 'containers/Content';

require('./index.scss');

export default class Panel extends Component {

  render() {
    return(
      <div className="app-Panel">
        <PanelImage />
        <div className="app-Panel-container">
          <Content />
        </div>
      </div>
    );
  }
}
