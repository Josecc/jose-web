import React, {Component} from 'react';

import {
  github,
  linkedin,
  medium,
  instagram
} from 'constants/InlineSVGs';

require('./index.scss');

export default class Footer extends Component {

  render() {
    return(
      <div className="app-Footer">
        <div className="app-Footer-content">
          <div className="app-Footer-content-social">
            <a dangerouslySetInnerHTML={github} href="https://github.com/Josecc" rel="noopener" target="__blank" />
            <a dangerouslySetInnerHTML={linkedin} href="https://www.linkedin.com/in/josecanahui/" rel="noopener" target="__blank" />
            <a dangerouslySetInnerHTML={medium} href="https://medium.com/@josecanahui" rel="noopener" target="__blank" />
            <a dangerouslySetInnerHTML={instagram} href="https://www.instagram.com/jose_canahui/" rel="noopener" target="__blank" />
          </div>
          <div>
            <span className="app-Footer-content-copy">2019 &copy; Jose Canahui</span>
          </div>
        </div>
      </div>
    );
  }
}
