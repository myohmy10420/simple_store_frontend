import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import * as serviceWorker from './serviceWorker'
import routes from './routes'

import NavBar from './component/NavBar'

import 'bootstrap/dist/css/bootstrap.css'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {
          routes.map((route, index) => (
            <Route exact path={route.path} component={route.component} key={index} />
          ))
        }
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
