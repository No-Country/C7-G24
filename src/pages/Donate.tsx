<<<<<<< HEAD
import React, { Fragment } from 'react';
import ContainerDonate from '../components/container/ContainerDonate';
import Content from '../components/Content';
import FooterComponent from '../components/container/FooterComponent';
import Car from '../assets/3.jpeg';
import '../styles/Donate.css';
const Donate = () => {
  return (
    <div>
      <ContainerDonate />
      <img src={Car} alt="" className="fondo2" />
      <Fragment>
        <Content />
        <FooterComponent />
      </Fragment>
=======
import React from 'react';
import ContainerDonate from '../components/container/ContainerDonate';

const Donate = () => {
  return (
    <div className=" p-5  text-center">
      <ContainerDonate />
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc
    </div>
  );
};

export default Donate;
