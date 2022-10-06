import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CompanyForm from '../pure/CompanyForm';
import VoluntaryForm from '../pure/VoluntaryForm';
<<<<<<< HEAD
import DonateFoodForm from '../pure/DonateFoodForm';
import DonateOthersForm from '../pure/DonateOtherForm';
import SubmitButton from '../SubmitButton';
import { useAppContext } from '../../context/Context';

const ContainerCheck = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [dni, setDni] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddres, setCompanyAddres] = useState('');
  const [typeCompany, setTypeCompany] = useState('');
  const [cuit, setCuit] = useState('');
  const [mailCompany, setMailCompany] = useState('');
  const [phoneCompany, setPhoneCompany] = useState('');
  const [soyPersona, setSoyPersona] = useState(false);
  const [soyEmpresa, setSoyEmpresa] = useState(false);
  const [validated, setValidated] = useState(false);
  const [categoryDonation, setCategoryDonation] = useState('');
  const [quantityDonation, setQuantityDonation] = useState('');
  const [infoFood, setInfoFood] = useState('');
  const [donateFood, setDonateFood] = useState('');
  const [otherDonate, setOtherDonate] = useState('');
  const [infoOtherDonate, setInfoOtherDonate] = useState('');
  const [quantityOtherDonate, setQuantityOtherDonate] = useState('');
  const context = useAppContext();
=======
import SubmitButton from '../SubmitButton';

const ContainerCheck = () => {
  const [soyPersona, setSoyPersona] = useState(false);
  const [soyEmpresa, setSoyEmpresa] = useState(false);
  const [validated, setValidated] = useState(false);
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71

  const handleOnSubmitVoluntaryForm = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
<<<<<<< HEAD
    if (soyPersona) {
      const peopleDonate = {
        id: dni,
        name,
        lastName,
        phone,
        mail,
        categoryDonation,
        quantityDonation,
        infoFood,
      };
      context.createPeopleDonation(peopleDonate);
    }
    if (soyEmpresa && donateFood) {
      const companyDonate = {
        id: cuit,
        companyName,
        companyAddres,
        typeCompany,
        mailCompany,
        phoneCompany,
        categoryDonation,
        quantityDonation,
        infoFood,
      };
      context.createCompanyDonation(companyDonate);
    }
    if (soyEmpresa && otherDonate) {
      const companyDonate = {
        id: cuit,
        companyName,
        companyAddres,
        typeCompany,
        mailCompany,
        phoneCompany,
        infoOtherDonate,
        quantityOtherDonate,
      };
      context.createCompanyDonation(companyDonate);
    }
  };

  const handleOnCheckBox = (e: {
    target: {
      id: any;
      checked: any;
    };
  }) => {
    const name = e.target.id;
    switch (name) {
      case 'persona':
        setSoyPersona(e.target.checked);
        break;
      case 'empresa':
        setSoyEmpresa(e.target.checked);
        break;
      case 'comida':
        setDonateFood(e.target.checked);
        break;
      case 'otros':
        setOtherDonate(e.target.checked);
        break;
      default:
        break;
    }
=======
  };

  const handleOnSoyPersona = (e: { target: { checked: any } }) => {
    const value = e.target.checked;
    setSoyPersona(value);
  };
  const handleOnSoyEmpresa = (e: { target: { checked: any } }) => {
    const value = e.target.checked;
    setSoyEmpresa(value);
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitVoluntaryForm}
      >
        <Form.Group as={Col} md="2">
          <Form.Check
            type="checkbox"
            onChange={handleOnCheckBox}
            label="¿Eres una Persona ?"
            id="persona"
          />
          <Form.Check
            type="checkbox"
            onChange={handleOnCheckBox}
            label="¿Eres una Empresa ?"
            id="empresa"
          />
        </Form.Group>
<<<<<<< HEAD
        {soyPersona ? (
          <VoluntaryForm
            name={setName}
            lastName={setLastName}
            phone={setPhone}
            mail={setMail}
            dni={setDni}
          />
        ) : (
          ''
        )}
        {soyEmpresa ? (
          <CompanyForm
            nameCompany={setCompanyName}
            addres={setCompanyAddres}
            typeCompany={setTypeCompany}
            cuit={setCuit}
            mail={setMailCompany}
            phone={setPhoneCompany}
          />
        ) : (
          ''
        )}
        {soyEmpresa ? (
          <Form.Group as={Col} md="2">
            <Form.Check
              type="checkbox"
              label="Donar Alimentos"
              id="comida"
              onChange={handleOnCheckBox}
            />
            <Form.Check
              type="checkbox"
              label="Otras Donaciónes"
              id="otros"
              onChange={handleOnCheckBox}
            />
          </Form.Group>
        ) : (
          ''
        )}
        {donateFood ? (
          <DonateFoodForm
            category={setCategoryDonation}
            quantity={setQuantityDonation}
            info={setInfoFood}
          />
        ) : (
          ''
        )}
        {otherDonate ? (
          <DonateOthersForm
            otherDonate={setInfoOtherDonate}
            quantityOtherDonate={setQuantityOtherDonate}
          />
        ) : (
          ''
        )}
        {donateFood || otherDonate ? <SubmitButton /> : ''}
=======
        {soyPersona ? <VoluntaryForm /> : ''}
        {soyEmpresa ? <CompanyForm /> : ''}
        {soyPersona || soyEmpresa ? <SubmitButton /> : ''}
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
      </Form>
    </div>
  );
};

export default ContainerCheck;
