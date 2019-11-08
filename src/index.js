import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, index) => (
            <Route exact path={route.path} key={index}>
              {route.component}
            </Route>
          ))
        }
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
