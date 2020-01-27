import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSlider from './components/image-slider';

function ImageTagger() {
  const [images, setImages] = useState([
    'https://grace951.github.io/react-image-carousel/img/landing1.jpg',
    'https://grace951.github.io/react-image-carousel/img/landing2.jpg',
    'https://grace951.github.io/react-image-carousel/img/landing3.jpg',
    'https://grace951.github.io/react-image-carousel/img/landing4.jpg',
  ])
  return (
    <div className="my-carousel">
      <ImageSlider images={images} />
    </div>
  );
}

export default ImageTagger;
