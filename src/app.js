import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

require('./app.scss');

import Home from 'components/Home';

render((
  <Router>
    <Route path="/" component={Home}>
    </Route>
  </Router>
), document.getElementById('root'));

[].forEach.call(document.querySelectorAll('img[data-src]'), img =>  {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
});
