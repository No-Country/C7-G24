import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD
=======

>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
import VoluntaryForm from '../pure/VoluntaryForm';
import VehicleForm from '../pure/VehicleForm';
import ScheduleForm from '../pure/ScheduleForm';
import SubmitButton from '../SubmitButton';
<<<<<<< HEAD
import { useAppContext } from '../../context/Context';
import '../../styles/ContBtn.css';
=======
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71

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

<<<<<<< HEAD
  const context = useAppContext();

=======
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
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
<<<<<<< HEAD
        className="p-5"
=======
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitVoluntaryForm}
      >
<<<<<<< HEAD
        {' '}
        <VoluntaryForm
          name={setName}
          lastName={setLastName}
          phone={setPhone}
          mail={setMail}
          dni={setDni}
        />
        <ScheduleForm scheduleInfo={setSchedule} />
        <Form.Group as={Col} md="12">
=======
        <VoluntaryForm />
        <ScheduleForm />
        <Form.Group as={Col} md="4">
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
          <Form.Check
            type="checkbox"
            onChange={check}
            label="¿Posees vehículo ?¿Te gustaría ayudar en el transporte de los
              alimentos?"
          />{' '}
          {completed ? (
<<<<<<< HEAD
            <p className="p-vehicle">
              Tipo de Vehiculo: <VehicleForm vehicle={setVehicle} />{' '}
=======
            <p>
              Tipo de Vehiculo: <VehicleForm />{' '}
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
            </p>
          ) : (
            ''
          )}
        </Form.Group>
<<<<<<< HEAD
        <div className="cont-btn">
          <SubmitButton />
        </div>
=======
        <SubmitButton />
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
      </Form>
    </div>
  );
};

export default FormContainer;
