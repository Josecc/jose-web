import React, {Component} from 'react';

require('./index.scss');

export default class Post extends Component {

  render() {
    return(
      <a className="app-Post" href={this.props.link} rel="noopener" target="__blank">
        <h2>{this.props.title}</h2>
        <hr />
        <div className="app-Description">
          <p>{this.props.description}</p>
        </div>
      </a>
    );
  }
}
