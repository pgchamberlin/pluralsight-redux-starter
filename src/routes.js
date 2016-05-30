import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EditorPage from './components/editor/EditorPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EditorPage} />
  </Route>
);
