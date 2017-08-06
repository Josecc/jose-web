import React, {Component} from 'react';

require('./index.scss');

export default class Footer extends Component {

  render() {
    return(
      <div className="app-Footer">
        <div className="app-Footer-content">
          <a href="https://github.com/Josecc" rel="noopener" target="_blank">Github</a><span> | </span>
          <a href="https://www.linkedin.com/in/josecanahui/" rel="noopener" target="_blank">Linked In</a>
        </div>
      </div>
    );
  }
}
