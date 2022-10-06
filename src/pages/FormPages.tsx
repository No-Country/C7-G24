import React from 'react';
import FormContainer from '../components/container/ContainerForm';
import '../styles/FormPages.css';
import back from '../assets/2.jpg';

const FormPages = () => {
  return (
    <div>
      <FormContainer />
      <img src={back} alt="" className="fondo" />
    </div>
  );
};

export default FormPages;
