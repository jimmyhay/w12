import React, { Component } from 'react';

import TweenLite from 'gsap';

import Carousel from './Carousel.js';

import img1 from '../assets/got1.png';
import img2 from '../assets/got2.png';
import img3 from '../assets/got3.png';
import img4 from '../assets/got4.png';
import img5 from '../assets/got5.png';

let urls = [img1, img2, img3, img4, img5];

class SecondContent extends Component {
  componentDidMount() {
    // TweenLite.to(this.refs.contentHeader,.7,{top: '0px', opacity:1, delay:1.8});
    // TweenLite.to(this.refs.carousel.refs.carouselContainer,2,{opacity:1, delay:2.1});
    // TweenLite.to(this.refs.contentShowInfo,.7,{top: '0px', opacity:1, delay:2.3});
    // TweenLite.to(this.refs.contentExtras,.7,{top: '0px', opacity:1, delay:2.5});
    // this.refs.contentShowInfoDetails.style.opacity = 0;
  }

  closeDown = () => {
    // TweenLite.to(this.refs.contentHeader,.7,{top: '5px', opacity:0, delay:1.6});
    // TweenLite.to(this.refs.carousel.refs.carouselContainer,0.7,{opacity:0, delay:1.6});
    // TweenLite.to(this.refs.contentShowInfo,.7,{top: '5px', opacity:0, delay:1.3});
    // TweenLite.to(this.refs.contentExtras,.7,{top: '5px', opacity:0, delay:1});
    //
    // this.props.callBack();
  }

  componentDidUpdate() {
    console.log("SecondContent componentDidUpdate", this.props.open);

    if (this.props.open === true) {
      TweenLite.to(this.refs.contentHeader,.7,{top: '0px', opacity:1, delay:1.8});
      TweenLite.to(this.refs.carousel.refs.carouselContainer,2,{opacity:1, delay:2.1});
      TweenLite.to(this.refs.contentShowInfo,.7,{top: '0px', opacity:1, delay:2.3});
      TweenLite.to(this.refs.contentExtras ,.7,{top: '0px', opacity:1, delay:2.5});
    }
  }

  render() {
    return (
      <div ref='contentContainer' className='content-container'>
        <div ref='contentHeader' className='content-header content-header-alt'>
          Game Of Thrones
        </div>
        <div ref='contentShowInfoDetails' className='content-show-info-details content-show-info-details-alt'>18 | 4 Seasons | DRAMA, FANTASY</div>
        {/*}<Carousel ref='carousel' images={urls} open={this.props.open} />*/}
        <Carousel ref='carousel' images={urls} open={this.props.open} callBack={this.closeDown} id={"second"} title={'Season 1'} />
        <div ref='contentShowInfo' className='content-show-info'>
          <div className='content-show-info-header content-show-info-header-alt'>1. Winter is Coming</div>
          <div className='content-show-info-description'>Ned Stark learns that his mentor has died; Viserys Targaryen plots to win back the throne.</div>
        </div>
        <div ref='contentExtras' className='content-extras'>
          <ul>
            <li>Season 2</li>
            <li>Season 3</li>
            <li>Season 4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SecondContent;
