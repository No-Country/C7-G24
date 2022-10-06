<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

<<<<<<< HEAD
const CompanyForm = ({
  nameCompany,
  addres,
  typeCompany,
  cuit,
  mail,
  phone,
}: any) => {
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const name = e.target.name;
    switch (name) {
      case 'nombre empresa':
        nameCompany(e.target.value);
        break;
      case 'direccion':
        addres(e.target.value);
        break;
      case 'tipo de empresa':
        typeCompany(e.target.value);
        break;
      case 'cuit':
        cuit(e.target.value);
        break;
      case 'email':
        mail(e.target.value);
        break;
      case 'telefono':
        phone(e.target.value);
        break;

      default:
        break;
    }
  };

=======
function CompanyForm() {
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
<<<<<<< HEAD
          <Form.Label>Nombre Empresa</Form.Label>
          <Form.Control
            type="text"
            name="nombre empresa"
            required
            onChange={handleOnChange}
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
=======
          <Form.Label>Nombre </Form.Label>
          <Form.Control required type="text" />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Apellido </Form.Label>
          <Form.Control required type="text" />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            type="text"
            name="direccion"
            onChange={handleOnChange}
            required
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
<<<<<<< HEAD
          <Form.Label>Tipo de Empresa</Form.Label>
          <Form.Control
            type="text"
            required
            name="tipo de empresa"
            onChange={handleOnChange}
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Cuit</Form.Label>
          <Form.Control
            required
            type="text"
            name="cuit"
            onChange={handleOnChange}
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
=======
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="ejem : usuario@email.com"
            name="email"
            onChange={handleOnChange}
            required
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            placeholder="0000-0000-0000"
            required
          />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="0000-0000-0000" required />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
<<<<<<< HEAD
=======
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Nombre Empresa</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Tipo de Empresa</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>{' '}
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
    </div>
  );
};

export default CompanyForm;
