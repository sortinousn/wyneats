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
