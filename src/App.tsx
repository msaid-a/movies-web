import React from 'react';
import './App.css';
import './static/styles/index.scss'
import './static/styles/tailwind.scss'

import { ROUTE_PATH } from "./Route/index";
import {AsyncPage, Layout} from './Component'
import "react-multi-carousel/lib/styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const { HOME, DETAIL } = ROUTE_PATH;

const ROUTES = [
  { path: HOME, exact: true, page: "Main" },
  { path: DETAIL, exact: true, page: "Detail" },
];

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={() => <AsyncPage page={route.page}  />}
            />
          ))}
          <Route component={() => <p>Not Found</p>} />
        </Switch>
      </Layout>
  </Router>
  );
}

export default App;
