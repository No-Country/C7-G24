import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../styles/HeaderForm.css';

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
  };

  return (
    <div className="px-5">
      <Row>
        {''}
        <div className="select-text">Seleccionar Categoria:</div>
        <select
          className="btn btn-dropdown  select-food btn-success p-1 w-10"
          name="categoria"
          onChange={handleOnChange}
        >
          <option value="Granos">Granos</option>
          <option value="Verduras">Verduras</option>
          <option value="Frutas">Frutas</option>
          <option value="Productos Lacteos">Productos Lacteos</option>
          <option value="Proteinas">Proteinas</option>
        </select>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <div className="divfoodDonate">
            <Form.Label className="label-form">Peso/Cantidad</Form.Label>
            <input
              required
              type="text"
              className="foodDonateForm"
              onChange={handleOnChange}
              name="cantidad"
              placeholder="ejem : papas 10kg"
            />
          </div>
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <div className="check-form">
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
          </div>
        </Form.Group>
      </Row>
    </div>
  );
};

export default DonateFoodForm;
