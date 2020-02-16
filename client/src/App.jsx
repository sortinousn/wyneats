import React from 'react';
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {
  state = { serverMessage: '' };

  componentDidMount() {
    fetch('/api/demo')
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
      <Footer></Footer>
    );
  }
}

export default App;