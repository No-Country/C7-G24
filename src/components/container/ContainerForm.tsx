import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import VoluntaryForm from '../pure/VoluntaryForm';
import VehicleForm from '../pure/VehicleForm';
import ScheduleForm from '../pure/ScheduleForm';
import SubmitButton from '../SubmitButton';
import { useAppContext } from '../../context/Context';

const FormContainer = () => {
  const [completed, setCompleted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [dni, setDni] = useState('');
  const [schedule, setSchedule] = useState('');
  const [vehicle, setVehicle] = useState('');

  const context = useAppContext();

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
    /* crea un objeto persona con la informacion obtenida desde el formulario voluntario */
    const person = {
      id: dni,
      name,
      lastName,
      phone,
      mail,
      schedule,
      vehicle,
    };
    context.createVoluntary(person);
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
        {' '}
        <VoluntaryForm
          name={setName}
          lastName={setLastName}
          phone={setPhone}
          mail={setMail}
          dni={setDni}
        />
        <ScheduleForm scheduleInfo={setSchedule} />
        <Form.Group as={Col} md="4">
          <Form.Check
            type="checkbox"
            onChange={check}
            label="¿Posees vehículo ?¿Te gustaría ayudar en el transporte de los
              alimentos?"
          />{' '}
          {completed ? (
            <p>
              Tipo de Vehiculo: <VehicleForm vehicle={setVehicle} />{' '}
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
