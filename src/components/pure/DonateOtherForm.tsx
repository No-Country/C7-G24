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
