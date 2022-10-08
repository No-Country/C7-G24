import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImgA from '../../assets/isologotipo.png';

const OngForm = () => {
  return (
    <div>
      <div className="formHeader">
        <img src={ImgA} alt="" className="logoBalcarce" />
        <div className="p-formu">
          Trabajamos para reducir el hambre, mejorar la nutricion y evitar el
          desperdicio de alimentos en Balcarse, Argentina.
        </div>
      </div>{' '}
      <div className="py-5">
        <Row className="mb-3 ">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Nombre </Form.Label>
            <Form.Control required type="text" />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Apellido </Form.Label>
            <Form.Control required type="text" />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Cuit de la Organización</Form.Label>
            <Form.Control required type="text" />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="ejem : usuario@email.com"
              required
            />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="0000-0000-0000" required />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Nombre de la Organización</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Tipo de Organización</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>{' '}
            <Form.Control.Feedback type="invalid">
              Debes completar el campo!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </div>
  );
};

export default OngForm;
