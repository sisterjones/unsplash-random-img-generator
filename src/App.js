import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       uiTheme: 'light',
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme(theme) {
    this.setState({
      uiTheme: theme,
    })
  }
  
  render() {
    return (
      <div className={`App App--${this.state.uiTheme}`}>
        <Header 
          toggleTheme={this.toggleTheme}
          theme={this.state.uiTheme}
        />
        <Wrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
