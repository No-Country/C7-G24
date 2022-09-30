import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CompanyForm from '../pure/CompanyForm';
import VoluntaryForm from '../pure/VoluntaryForm';
import SubmitButton from '../SubmitButton';

const ContainerCheck = () => {
  const [soyPersona, setSoyPersona] = useState(false);
  const [soyEmpresa, setSoyEmpresa] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleOnSubmitVoluntaryForm = (event: {
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

  const handleOnSoyPersona = (e: { target: { checked: any } }) => {
    const value = e.target.checked;
    setSoyPersona(value);
  };
  const handleOnSoyEmpresa = (e: { target: { checked: any } }) => {
    const value = e.target.checked;
    setSoyEmpresa(value);
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitVoluntaryForm}
      >
        <Form.Group as={Col} md="2">
          <Form.Check
            type="checkbox"
            onChange={handleOnSoyPersona}
            label="¿Eres una Persona ?"
          />
          <Form.Check
            type="checkbox"
            onChange={handleOnSoyEmpresa}
            label="¿Eres una Empresa ?"
          />
        </Form.Group>
        {soyPersona ? <VoluntaryForm /> : ''}
        {soyEmpresa ? <CompanyForm /> : ''}
        {soyPersona || soyEmpresa ? <SubmitButton /> : ''}
      </Form>
    </div>
  );
};

export default ContainerCheck;
