<<<<<<< HEAD
import React, { useState } from 'react';
import '../../styles/Carousel.css';
import carousel1 from '../../assets/1.jpg';
import carousel2 from '../../assets/2.jpg';
import carousel3 from '../../assets/3.jpeg';
import carousel4 from '../../assets/4.jpg';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100  rounded-circle"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-circle"
          src={carousel3}
          alt="Second slide"
        />{' '}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100 rounded-circle"
          src={carousel2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto w-100 rounded-circle"
          src={carousel4}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
=======
import React from "react";
import "../../styles/Carousel.css";
import carousel1 from "../../assets/1.jpg";
import carousel2 from "../../assets/2.jpg";
import carousel3 from "../../assets/3.jpeg";
import carousel4 from "../../assets/4.jpg";

const CarouselComponent = () => {

    return (
<div className="pic-ctn">
    <img src={carousel1} alt="balcarse" className="picture"/>
    <img src={carousel2} alt="balcarse" className="picture"/>
    <img src={carousel3} alt="balcarse" className="picture"/>
    <img src={carousel4} alt="balcarse" className="picture"/>
  </div>
    );
}

export default CarouselComponent;
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
