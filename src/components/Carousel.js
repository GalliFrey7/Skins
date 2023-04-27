import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      images: [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
      ]
    };

    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  nextImage() {
    const newIndex = this.state.currentImageIndex + 1;

    if (newIndex < this.state.images.length) {
      this.setState({ currentImageIndex: newIndex });
    }
  }

  previousImage() {
    const newIndex = this.state.currentImageIndex - 1;

    if (newIndex >= 0) {
      this.setState({ currentImageIndex: newIndex });
    }
  }

  render() {
    const { currentImageIndex, images } = this.state;

    return (
      <div className="carousel">
        <div className="carousel-image-wrapper">
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
        <button className="carousel-button" onClick={this.previousImage}>
          Previous
        </button>
        <button className="carousel-button" onClick={this.nextImage}>
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;