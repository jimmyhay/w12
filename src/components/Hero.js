import React, { Component } from 'react';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import heroOverlay from '../assets/hero-overlay.png';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {heroSrc: hero1};
  }

  componentWillReceiveProps(nextProps) {
  // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.changeBackground === true) {
      this.setState({ heroSrc: hero2 });
    }
  }

  render() {
    return (
      <div className='hero-container'>
        <div className='hero-image'><img src={this.state.heroSrc}/></div>
        <div className='hero-overlay'><img src={heroOverlay}/></div>
      </div>
    );
  }
}

export default Hero;
