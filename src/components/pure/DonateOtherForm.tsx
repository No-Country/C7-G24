<<<<<<< HEAD
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DonateOtherForm = ({ otherDonate, quantityOtherDonate }: any) => {
  return (
    <div>
      <h5>Otras donaciones</h5>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Donacion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lo que deseas donar"
            name="otra donacion"
            required
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Litros/Kilogramos/Unidades"
            required
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </div>
  );
};

export default DonateOtherForm;
=======
<<<<<<< HEAD
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DonateOtherForm = ({ otherDonate, quantityOtherDonate }: any) => {
  return (
    <div>
      <h5>Otras donaciones</h5>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Otras Donaciones</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lo que deseas donar"
            name="otra donacion"
            required
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Litros/Kilogramos/Unidades"
            required
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
=======
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import SubmitButton from '../SubmitButton';
const DonateMinForm = () => {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <Row className="mb-3">
        <h1>Otras donaciones</h1>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Combustibles</Form.Label>
          <Form.Control required type="text" placeholder="20L" />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Otros</Form.Label>
          <Form.Control required type="text" placeholder="" />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Cantidad</Form.Label>
          <InputGroup hasValidation>
            <Form.Control type="text" placeholder="Litros/kg" required />
            <Form.Control.Feedback>Correcto! </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        {' '}
        Alimentos Preelaborados
        <select
          className="btn btn-dropdown btn-success p-1"
          name="Categoria"
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
        >
          <option value="enlatados">Enlatados</option>
          <option value="embutidos">Productos procesados</option>
          <option value="otros">Otros</option>
        </select>
      </Row>
      <SubmitButton />
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
    </div>
  );
};

<<<<<<< HEAD
export default DonateOtherForm;
=======
export default DonateMinForm;
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc
