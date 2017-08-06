import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Home';

render((
  <Router>
    <Route path="/" component={Home}>
    </Route>
  </Router>
), document.getElementById('root'));
