<<<<<<< HEAD
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../styles/VoluntaryForm.css';

const VoluntaryForm = ({ name, lastName, phone, mail, dni }: any) => {
  const handleOnChange = (e: any) => {
    const names = e.target.name;
    switch (names) {
      case 'nombres':
        name(e.target.value);
        break;
      case 'apellidos':
        lastName(e.target.value);
        break;
      case 'mail':
        mail(e.target.value);
        break;
      case 'dni':
        dni(e.target.value);
        break;
      case 'telefono':
        phone(e.target.value);
=======
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

/* formulario para vountario entrega de comida en puntos de ayuda */

const VoluntaryForm = ({ person }: any) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [horario, setHorario] = useState('');
  const [mail, setMail] = useState('');
  const [dni, setDni] = useState('');

  const handleOnChange = (e: any) => {
    const name = e.target.name;
    switch (name) {
      case 'nombres':
        setNombre(e.target.value);
        break;
      case 'apellidos':
        setApellido(e.target.value);
        break;
      case 'mail':
        setMail(e.target.value);
        break;
      case 'dni':
        setDni(e.target.value);
        break;
      case 'telefono':
        setTelefono(e.target.value);
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
        break;

      default:
        break;
    }
  };

  return (
<<<<<<< HEAD
    <div className="absolute">
=======
    <div className="V-form">
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
      <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={handleOnChange}
            name="nombres"
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={handleOnChange}
            name="apellidos"
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={handleOnChange}
            name="dni"
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="ejem : usuario@email.com"
            onChange={handleOnChange}
            name="mail"
          />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" onChange={handleOnChange} name="telefono" />
        </Form.Group>
      </Row>
    </div>
  );
};

export default VoluntaryForm;
