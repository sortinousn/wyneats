import React from 'react';
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
      <Resturant/>

      // <div id="demo">
      //   <h1>Hello from client/src/App.js</h1>
      //   <h1>{this.state.serverMessage}</h1>
      // </div>
    );
  }
}

export default App;
