import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from "./routes/Users.js";

import Introduction from "./routes/Introduction.js";

import Articles from './routes/articles'

import ComponentPages from "./routes/ComponentPages/";
import DemoComponent from './routes/ComponentPages/DemoComponent'
import bigDataTableDemo from './routes/ComponentPages/bigDataTable'
import MockJsDemo from './routes/ComponentPages/mockDemo'

function RouterConfig({ history }) {
  return (
    <Router path="/" history={history} component={Introduction}>
      <Route path="/">
        <IndexRoute component={Introduction} />
      </Route>

      <Route path="users" component={Users} />
      <Route path="introduction" component={Introduction} />
      <Route path="articles">
        <IndexRoute component={Articles} />
      </Route>
      <Route path="components">
        <IndexRoute component={ComponentPages} />
        <Route path="demo" >
          {/*<Route path="" component={ComponentPages} />*/}
          <Route path="bigDataTableDemo" component={ bigDataTableDemo } />
          <Route path="mockJsDemo" component={ MockJsDemo } />
        </Route>

      </Route>
    </Router>
  );
}

export default RouterConfig;
