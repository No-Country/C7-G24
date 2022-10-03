import React from 'react';
import '../../styles/Carousel.css';
import carousel1 from '../../assets/1.jpg';
import carousel2 from '../../assets/2.jpg';
import carousel3 from '../../assets/3.jpeg';
import carousel4 from '../../assets/4.jpg';

const CarouselComponent = () => {
  return (
    <div className="pic-ctn">
      <img src={carousel1} alt="balcarse" className="picture" />
      <img src={carousel2} alt="balcarse" className="picture" />
      <img src={carousel3} alt="balcarse" className="picture" />
      <img src={carousel4} alt="balcarse" className="picture" />
    </div>
  );
};

export default CarouselComponent;
