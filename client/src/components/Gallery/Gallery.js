import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import './gallery.css'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img4,
    thumbnail: img4,
  },
  {
    original: img5,
    thumbnail: img5,
  },
];

class Gallery extends Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Gallery;