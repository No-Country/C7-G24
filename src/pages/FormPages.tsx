<<<<<<< HEAD
import React, { Fragment } from 'react';
import FormContainer from '../components/container/ContainerForm';
import '../styles/FormPages.css';
import back from '../assets/2.jpg';
import Content from '../components/Content';
import FooterComponent from '../components/container/FooterComponent';
=======
import React from 'react';
import FormContainer from '../components/container/ContainerForm';
import '../styles/FormPages.css';
import back from '../assets/2.jpg';
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc

const FormPages = () => {
  return (
    <div>
      <FormContainer />
      <img src={back} alt="" className="fondo" />
<<<<<<< HEAD
      <Fragment>
        <Content />
        <FooterComponent />
      </Fragment>
=======
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc
    </div>
  );
};

export default FormPages;
