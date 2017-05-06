import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostIndex from './components/posts_index';

import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex}/>
  </Route>
);
