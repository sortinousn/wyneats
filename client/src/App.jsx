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
=======
import React from 'react';
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css';
import "./"
import "./components/MyEats"
import Resturant from './components/MyEats';

class App extends React.Component {
  state = { serverMessage: '' };

  componentDidMount() {
    fetch('/client/src/components/MyEats.js')
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }));
  }

   render() {
    return (
      <Home></Home>
    );
  }


  render() {
    return (
      <Header></Header>
    );
  }

  render() {
    return (
      <React.Fragment>
      <Resturant/>

      // <div id="demo">
      //   <h1>Hello from client/src/App.js</h1>
      //   <h1>{this.state.serverMessage}</h1>
      // </div>
      <Footer></Footer>
      </React.Fragment>
    );
  }

}
export default App;
