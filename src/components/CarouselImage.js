import React, { Component } from 'react';

import {Quart, TweenMax} from 'gsap';

class CarouselImage extends Component {
  componentDidMount() {
    if (this.props.open) {
      let delayVal = 1.2+this.props.delay;
      let id = '#theSquare'+this.props.id;

      TweenMax.to(id, 1.8, {attr:{y:0}, ease:Quart.easeInOut, delay: delayVal});
    }
  }

  componentDidUpdate() {
    if (this.props.open === false) {
      let delayVal = this.props.delay;
      let id = '#theSquare'+this.props.id;

      this.refs.carouselImageBackground.style.visibility = 'hidden';

      TweenMax.to(id, 1.8, {attr:{y:234}, ease:Quart.easeInOut, delay: delayVal});
    } else if (this.props.open === true) {
      let delayVal = 1.2+this.props.delay;
      let id = '#theSquare'+this.props.id;
      TweenMax.to(id, 1.8, {attr:{y:0}, ease:Quart.easeInOut, delay: delayVal});
    }
  }

  handleMouseOver = () => {
    this.refs.carouselImageBackground.style.visibility = 'visible';
  }

  handleMouseOut = () => {
    this.refs.carouselImageBackground.style.visibility = 'hidden';
  }

  handleClick = () => {
    this.props.callBack();
  }

  render() {
    let clipPath = "url(#cut-off-bottom"+this.props.id+")";

    return (
      <li ref='test' className='carousel-image-container'>
        <div ref='carouselImageBackground' className='carousel-image-background'></div>
        <svg className='carousel-svg' width='416' height='234'>
          <defs>
            <clipPath id={"cut-off-bottom"+this.props.id}>
              <rect id={"theSquare"+this.props.id} x="0" y="234" width="416" height="234" />
            </clipPath>
          </defs>

          <image onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} href={this.props.img} width='416' height='234' clipPath={clipPath}/>
        </svg>
      </li>
    );
  }
}

export default CarouselImage;
