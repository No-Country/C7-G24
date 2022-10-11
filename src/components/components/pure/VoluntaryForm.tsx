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
        break;

      default:
        break;
    }
  };

  const send = () => {
    return person([nombre, apellido, dni, mail, telefono, horario]);
  };

  return (
    <div className="V-form">
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
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
        <Form.Group as={Col} md="4" controlId="validationCustom02">
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
        <Form.Group as={Col} md="4" controlId="validationCustom03">
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
      <Row className="mb-2">
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="ejem : usuario@email.com"
            onChange={handleOnChange}
            name="mail"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" onChange={handleOnChange} name="telefono" />
        </Form.Group>
      </Row>
    </div>
  );
};

export default VoluntaryForm;
