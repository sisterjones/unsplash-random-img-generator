import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
