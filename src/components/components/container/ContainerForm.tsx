import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import VoluntaryForm from '../pure/VoluntaryForm';
import VehicleForm from '../pure/VehicleForm';
import ScheduleForm from '../pure/ScheduleForm';
import SubmitButton from '../SubmitButton';

const FormContainer = () => {
  const [completed, setCompleted] = useState(false);
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

  const check = (e: { target: { checked: any } }) => {
    const value = e.target.checked;
    setCompleted(value);
  };

  return (
    <div className="p-5">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitVoluntaryForm}
      >
        <VoluntaryForm />
        <ScheduleForm />
        <Form.Group as={Col} md="4">
          <Form.Check
            type="checkbox"
            onChange={check}
            label="¿Posees vehículo ?¿Te gustaría ayudar en el transporte de los
              alimentos?"
          />{' '}
          {completed ? (
            <p>
              Tipo de Vehiculo: <VehicleForm />{' '}
            </p>
          ) : (
            ''
          )}
        </Form.Group>
        <SubmitButton />
      </Form>
    </div>
  );
};

export default FormContainer;
