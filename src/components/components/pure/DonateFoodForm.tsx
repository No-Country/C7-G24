import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DonateFoodForm = () => {
  const [selected, setSelected] = useState('');

  const handleOnChangeCantidad = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setSelected(value);
  };

  return (
    <div className="p-4">
      <Row>
        {''}
        Seleccionar Categoria:
        <select
          className="btn btn-dropdown  btn-success p-1 w-10"
          name="Categoria"
          value={selected}
          onChange={handleOnChangeCantidad}
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
        </Form.Group>
      </Row>
    </div>
  );
};

export default DonateFoodForm;
