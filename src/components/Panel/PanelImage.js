import React, {Component} from 'react';

import {panelPlaceholders} from 'constants/InlineSVGs';

import imageOne from 'assets/panel-one.png';
import imageTwo from 'assets/panel-two.png';
import imageThree from 'assets/panel-three.png';
import imageFour from 'assets/panel-four.png';
import imageFive from 'assets/panel-five.png';
import imageSix from 'assets/panel-six.png';
import imageSeven from 'assets/panel-seven.png';

require('./index.scss');

export default class PanelImage extends Component {
  render() {
    return(
      <div className="app-PanelImage">
        <div className="app-PanelImage-icons">
          <div className="app-PanelImage-icon">
            <div className="app-PanelImage-icon-placeholder" dangerouslySetInnerHTML={panelPlaceholders[0]}/>
            <img src={imageOne}/>
          </div>
          <div className="app-PanelImage-icon">
            <div className="app-PanelImage-icon-placeholder" dangerouslySetInnerHTML={panelPlaceholders[1]}/>
            <img src={imageTwo}/>
          </div>
          <div className="app-PanelImage-icon">
            <div className="app-PanelImage-icon-placeholder" dangerouslySetInnerHTML={panelPlaceholders[2]}/>
            <img src={imageThree}/>
          </div>
          <div className="app-PanelImage-icon">
            <div className="app-PanelImage-icon-placeholder" dangerouslySetInnerHTML={panelPlaceholders[3]}/>
            <img src={imageFour}/>
          </div>
          <div className="app-PanelImage-icon">
            <div className="app-PanelImage-icon-placeholder" dangerouslySetInnerHTML={panelPlaceholders[4]}/>
            <img src={imageFive}/>
          </div>
          <div className="app-PanelImage-icon">
            <div className="app-PanelImage-icon-placeholder" dangerouslySetInnerHTML={panelPlaceholders[5]}/>
            <img src={imageSix}/>
          </div>
          <div className="app-PanelImage-icon">
            <div className="app-PanelImage-icon-placeholder" dangerouslySetInnerHTML={panelPlaceholders[6]}/>
            <img src={imageSeven}/>
          </div>
        </div>
        <div className="app-PanelImage-bottom"/>
      </div>
    );
  }
}
