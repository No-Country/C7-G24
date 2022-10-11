import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import OngForm from '../pure/OngForm';
import SubmitButton from '../SubmitButton';

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
    <div className="p-5">
      <Form noValidate validated={validated} onSubmit={handleOnSubmitOngForm}>
        <OngForm />
        <SubmitButton />
      </Form>
    </div>
  );
};

export default ContainerOng;
