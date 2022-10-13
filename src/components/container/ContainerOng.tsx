import React, { Fragment, useState } from 'react';
import { Form } from 'react-bootstrap';
import OngForm from '../pure/OngForm';
import SubmitButton from '../SubmitButton';
import Fondo4 from '../../assets/11.jpeg';
import '../../styles/ContainerOng.css';
import FooterComponent from './FooterComponent';

const ContainerOng = () => {
  const [validated, setValidated] = useState(false);

  const handleOnSubmitOngForm = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <img src={Fondo4} alt="" className="fondo4" />
      <Form
        className="formong p-5"
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitOngForm}
      >
        <OngForm />
        <div className="submitButtonFormOng">
          <SubmitButton />
        </div>
      </Form>
      <Fragment>
        <FooterComponent />
      </Fragment>
    </div>
  );
};

export default ContainerOng;
