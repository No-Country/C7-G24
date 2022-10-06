<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

<<<<<<< HEAD
const DonateFoodForm = ({ category, quantity, info }: any) => {
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const names = e.target.name;
    switch (names) {
      case 'categoria':
        category(e.target.value);
        break;
      case 'cantidad':
        quantity(e.target.value);
        break;
    }
  };

  const handleOnClick = (e: any) => {
    const name = e.target.id;
    switch (name) {
      case 'perecedero':
        info('Perecedero');
        break;
      case 'noperecedero':
        info('No Perecedero');
        break;

      default:
        break;
    }
=======
const DonateFoodForm = () => {
  const [selected, setSelected] = useState('');

  const handleOnChangeCantidad = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setSelected(value);
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
  };

  return (
    <div className="p-4">
      <Row>
        {''}
        Seleccionar Categoria:
        <select
          className="btn btn-dropdown  btn-success p-1 w-10"
<<<<<<< HEAD
          name="categoria"
          onChange={handleOnChange}
=======
          name="Categoria"
          value={selected}
          onChange={handleOnChangeCantidad}
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
        >
          <option value="Granos">Granos</option>
          <option value="Verduras">Verduras</option>
          <option value="Frutas">Frutas</option>
          <option value="Productos Lacteos">Productos Lacteos</option>
          <option value="Proteinas">Proteinas</option>
        </select>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>Peso/Cantidad</Form.Label>
          <Form.Control
            required
            type="text"
<<<<<<< HEAD
            onChange={handleOnChange}
            name="cantidad"
            placeholder="ejem : papas 10kg"
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Check
            type="checkbox"
            id="perecedero"
            onClick={handleOnClick}
            label="Perecedero"
          />
          <Form.Check
            type="checkbox"
            onClick={handleOnClick}
            id="noperecedero"
            label="No Perecedero"
          />
=======
            onChange={handleOnChangeCantidad}
            name="cantidad"
            placeholder="ejem : papas 10kg"
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Check type="checkbox" label="Perecedero" />
          <Form.Check type="checkbox" label="No Perecedero" />
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
        </Form.Group>
      </Row>
    </div>
  );
};

export default DonateFoodForm;
