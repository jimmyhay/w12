import React, { Component } from 'react';

import {Quart, TweenMax} from 'gsap';

class ScreenWipe extends Component {
  componentDidMount() {
    TweenMax.to(this.refs.screenWipe, 1.9, {top:"1080px", ease:Quart.easeInOut, delay: 0.8});
  }

  componentDidUpdate() {
    if (this.props.open === false) {
      TweenMax.to(this.refs.screenWipe, 1.9, {top:"0px", ease:Quart.easeInOut, delay: 1, onComplete: this.wipeClosed});
    }

    if (this.props.open === true) {
      TweenMax.to(this.refs.screenWipe, 1.9, {top:"1080px", ease:Quart.easeInOut, delay: 1});
    }
  }

  wipeClosed = () => {
    this.props.callBack();
  }

  render() {
    return (
      <div ref='carouselContainer' className='screenwipe-container'>
        <div ref='screenWipe' className='screenwipe'></div>
      </div>
    );
  }
}

export default ScreenWipe;
