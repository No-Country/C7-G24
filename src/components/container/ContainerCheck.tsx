import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import CompanyForm from "../pure/CompanyForm";
import VoluntaryForm from "../pure/VoluntaryForm";

const ContainerCheck = () => {
    const [soyPersona, setSoyPersona] = useState(false);
    const [soyEmpresa, setSoyEmpresa] = useState(false);

    const handleOnSoyPersona = (e: { target: { checked: any } }) => {
        const value = e.target.checked;
        setSoyPersona(value);

    }
    const handleOnSoyEmpresa = (e: { target: { checked: any } }) => {
        const value = e.target.checked;
        setSoyEmpresa(value);
      };

    
    
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Check
            type="checkbox"
            onChange={handleOnSoyPersona}
            label="¿Eres una Persona ?"
          />
          <Form.Check
            type="checkbox"
            onChange={handleOnSoyEmpresa}
            label="¿Eres una Empresa ?"
          />
        </Form.Group>
      </Form>
      {soyPersona? <VoluntaryForm/>:""}
      {soyEmpresa ? <CompanyForm/> : "" }
    </div>
  );
};

export default ContainerCheck;
