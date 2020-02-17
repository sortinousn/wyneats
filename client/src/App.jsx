import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <div className="Home">
          <nav class="locations">
            <ul>
              <li>
                <Link to="/">--------</Link>
              </li>
              <li>
                <Link to="/myeats">Myeats</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Myeats" />
          <Route path="/About" />
          <Route exact path="/contact" component={contact} />
        </Switch>
        '
      </Router>
    </Fragment>
  );
  }
export default App;
