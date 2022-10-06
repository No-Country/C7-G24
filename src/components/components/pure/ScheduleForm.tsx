import React, {useState} from "react"
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ScheduleForm = () => {
    const [horario, setHorario] = useState("");

    const handleOnChange = (e:any)=> {
        const value = e.target.value
        setHorario(value)
    };

    return (<Form.Group as={Col} md="4" controlId="validationCustom04">
    <Form.Label>Horario</Form.Label>
    <Form.Control
      required
      type="text"
      placeholder="ejem (09:00AM - 12:00PM)"
      onChange={handleOnChange}
      name="horario"
    />
    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
    <Form.Control.Feedback type="invalid">
      Debes completar el campo!
    </Form.Control.Feedback>
  </Form.Group>)
}

export default ScheduleForm 