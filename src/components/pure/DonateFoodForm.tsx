import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const DonateFoodForm = () => {
  const [selected,setSelected]=useState("");

  return (
    <div>
      <div>
        <select className="btn btn-dropdown btn-success p-1"  name="Categoria" value={selected} onChange={(event)=>setSelected(event.target.value)}  >
          <option  value="Granos">Granos</option>
          <option  value="Verduras">Verduras</option>
          <option value="Frutas">Frutas</option>
          <option value="Productos Lacteos">Productos Lacteos</option>
          <option  value="Proteinas">Proteinas</option>
        </select>
      </div>)
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Peso/Cantidad</Form.Label>
        <Form.Control
          required
          type="text"
          onChange={handleOnChange}
          name="cantidad"
          placeholder="ejem : papas 10kg"
        />
        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Debes completar el campo!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4">
          <Form.Check
            type="checkbox"
            onChange={check}
            label="¿Posees vehículo ?¿Te gustaría ayudar en el transporte de los
              alimentos?"
          />
      </Row>
    </div>
  )
}

export default DonateFoodForm