import React, { Component } from 'react';
import './App.css';

import Hero from './components/Hero.js';
import FirstContent from  './components/FirstContent.js';
import SecondContent from  './components/SecondContent.js';
import ScreenWipe from './components/ScreenWipe.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {open: true, changeBackground: false};
  }

  componentDidMount() {
    this.refs.secondContent.refs.contentContainer.style.visibility = 'hidden';
  }

  closeDown = () => {
    this.setState({open: false});
  }

  loadNewScreen = () => {
    this.refs.firstContent.refs.contentContainer.style.visibility = 'hidden';
    this.refs.secondContent.refs.contentContainer.style.visibility = 'visible';

    this.setState({open: true, changeBackground: true});
  }

  render() {
    return (
      <div ref='appContainer' className='app-container'>
        <Hero changeBackground={this.state.changeBackground} />
        <FirstContent ref='firstContent' open={this.state.open} callBack={this.closeDown}/>
        <SecondContent ref='secondContent' open={this.state.open} />
        <ScreenWipe open={this.state.open} callBack={this.loadNewScreen} />
      </div>
    );
  }
}

export default App;
