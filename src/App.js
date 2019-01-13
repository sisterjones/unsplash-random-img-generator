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
       sliderValue: 30,
    }
    this.toggleTheme = this.toggleTheme.bind(this)
    this.setImageCount = this.setImageCount.bind(this)
  }

  toggleTheme(theme) {
    this.setState({
      uiTheme: theme,
    })
  }

  setImageCount(e) {
    this.setState({
      sliderValue: e.target.value,
    })
  }
  
  render() {
    return (
      <div className={`App App--${this.state.uiTheme}`}>
        <Header 
          toggleTheme={this.toggleTheme}
          theme={this.state.uiTheme}
          sliderValue={this.state.sliderValue}
          setImageCount={this.setImageCount}
        />
        <Wrapper 
          theme={this.state.uiTheme}
          imageCount={this.state.sliderValue}
        />
        <Footer 
          theme={this.state.uiTheme}
        />
      </div>
    );
  }
}

export default App;
