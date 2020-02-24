import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FindEats from './components/FindEats/FindEats';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import MyEats from './components/MyEats/MyEats';
import About from './components/About/About';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/findeats" component={FindEats} />
          <Route path="/myeats" component={MyEats} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
