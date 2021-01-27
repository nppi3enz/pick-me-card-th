import React from "react";
import Routes from './routes'
import {
  BrowserRouter as Router,
//   Switch,
//   Route,
  Link,
//   useRouteMatch,
//   useParams
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './resources/theme.scss'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/guessword">GuessWord</Link>
          </li>
        </ul>
        <Routes />
      </div>
    </Router>
  );
}
