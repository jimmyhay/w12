import React, { Component } from 'react';

import TweenLite from 'gsap';

import Carousel from './Carousel.js';

import img1 from '../assets/show1alt.png';
import img2 from '../assets/show2.png';
import img3 from '../assets/show3.png';
import img4 from '../assets/show4.png';
import img5 from '../assets/show5.png';

let urls = [img1, img2, img3, img4, img5];

class FirstContent extends Component {
  componentDidMount() {
    TweenLite.to(this.refs.contentHeader,.7,{top: '0px', opacity:1, delay:1.8});
    TweenLite.to(this.refs.carousel.refs.carouselContainer,2,{opacity:1, delay:2.1});
    TweenLite.to(this.refs.contentShowInfo,.7,{top: '0px', opacity:1, delay:2.3});
    TweenLite.to(this.refs.contentExtras,.7,{top: '0px', opacity:1, delay:2.5});
  }

  componentWillReceiveProps(nextProps) {
  // You don't have to do this check first, but it can help prevent an unneeded render
    // if (nextProps.open === true) {
    //   this.setState({ open: true });
    // } else if (nextProps.open === false) {
    //   this.setState({ open: false });
    // }
  }

  closeDown = () => {
    TweenLite.to(this.refs.contentHeader,.7,{top: '5px', opacity:0, delay:1.6});
    TweenLite.to(this.refs.carousel.refs.carouselContainer,0.7,{opacity:0, delay:1.6});
    TweenLite.to(this.refs.contentShowInfo,.7,{top: '5px', opacity:0, delay:1.3});
    TweenLite.to(this.refs.contentExtras,.7,{top: '5px', opacity:0, delay:1});

    this.props.callBack();
  }

  render() {
    return (
      <div ref='contentContainer' className='content-container'>
        <div ref ='contentHeader' className='content-header'>
          TV Shows
        </div>
        <Carousel ref='carousel' images={urls} open={this.props.open} callBack={this.closeDown} id={'first'} title={'Recommended'} />
        <div ref='contentShowInfo' className='content-show-info'>
          <div ref='showInfoHeader' className='content-show-info-header'>Lucifer</div>
          <div ref='showInfoDetails' className='content-show-info-details'>18 | CRIME, DRAMA | 2017</div>
          <div ref='showInfoDescription' className='content-show-info-description'>Luther is a brilliant but emotionally impulsive detective who is tormented by the dark side of humanity while hunting down murderers. Once the self-destructive detective knows the killer&#39;s identity, it becomes a psychological…</div>
        </div>
        <div ref='contentExtras' className='content-extras'>
          <ul>
            <li>New to W12</li>
            <li>Best of Catchup</li>
            <li>Most popular</li>
            <li>Action</li>
            <li>Comedy</li>
            <li>Drama</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FirstContent;
