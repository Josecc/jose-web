import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

import reducer from './reducers';
import {initialPosts} from 'actions/medium';
import Home from 'components/Home';

require('./app.scss');

const store = createStore(reducer, applyMiddleware(thunk));

ReactGA.initialize('<%= process.env.GOOGLE_ANALYTICS= %>');

store.dispatch(initialPosts());

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));

[].forEach.call(document.querySelectorAll('img[data-src]'), img =>  {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
});
