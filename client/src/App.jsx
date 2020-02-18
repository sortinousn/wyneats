import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import "./components/MyEats"
import 'bootstrap/dist/css/bootstrap.min.css';
import contact from './components/Contact';
import Home from './components/Home';
import Favorites from './components/Favorites';

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
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Myeats" />
          <Route path="/Favorites" component={Favorites}/>
          <Route path="/About" />
          <Route exact path="/contact" component={contact} />
        </Switch>
      </Router>
    </Fragment>
  );
  }

        
export default App;
