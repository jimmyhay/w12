import React, { Component } from 'react';

import {TweenMax} from 'gsap';

import CarouselImage from  './CarouselImage.js';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {open: true};

    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.open === true) {
      this.setState({ open: true });
    } else if (nextProps.open === false) {
      this.setState({ open: false });
    }
  }

  imageClicked = () => {
    // this.setState({open: false});

    this.props.callBack();
  }

  renderImages = () => {
    let that = this;

    return this.props.images.map(function(img, i) {
      if (i===0) {
        return <CarouselImage key={i} id={that.props.id+i} img={img} delay={i*0.15} open={that.state.open} callBack={that.imageClicked} />
      } else {
        return <CarouselImage key={i} id={that.props.id+i} img={img} delay={i*0.15} open={that.state.open} callBack={that.imageClicked} />
      }
    });
  }

  render() {
    return (
      <div ref='carouselContainer' className='carousel-container'>
        <div className='carousel-title'>
          {this.props.title}
        </div>
        <ul>
          <this.renderImages />
          {/*}<li className='carousel-first'><img src={this.props.images[0]}/></li>
          <li><img src={this.props.images[1]}/></li>
          <li><img src={img3}/></li>
          <li><img src={img4}/></li>
          <li><img src={img5}/></li>*/}
        </ul>
      </div>
    );
  }
}

export default Carousel;
