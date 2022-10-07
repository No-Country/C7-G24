import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DonateFoodForm from '../pure/DonateFoodForm';
import VoluntaryForm from '../pure/VoluntaryForm';
import SubmitButton from '../SubmitButton';
import ContainerCheck from './ContainerCheck';
import { useAppContext } from '../../context/Context';
import '../../styles/HeaderForm.css';
const ContainerDonate = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [dni, setDni] = useState('');
  const [categoryDonation, setCategoryDonation] = useState('');
  const [quantityDonation, setQuantityDonation] = useState('');
  const [infoFood, setInfoFood] = useState('');
  const [minorista, setMinorista] = useState(false);
  const [mayorista, setMayorista] = useState(false);
  const [validated, setValidated] = useState(false);
  const [stateMinorista, setStateMinorista] = useState(true);
  const [stateMayorista, setStateMayorista] = useState(true);

  const context = useAppContext();

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const peopleDonation = {
      id: dni,
      name,
      lastName,
      phone,
      mail,
      categoryDonation,
      quantityDonation,
      infoFood,
    };
    context.createPeopleDonation(peopleDonation);
  };

  const handleOnClick = (event: any) => {
    const id = event.target.id;
    switch (id) {
      case 'minorista':
        setMinorista(!minorista);
        setStateMinorista(false);
        break;
      default:
      case 'mayorista':
        setMayorista(!mayorista);
        setStateMayorista(false);
        break;
    }
  };

  return (
    <div className="p-5">
      <Form
        noValidate
        className="minForm"
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div></div>
        {stateMinorista && stateMayorista ? (
          <div>
            <Button
              onClick={handleOnClick}
              id="minorista"
              className="btn m-5 w-45 btn-success text-light"
            >
              Donante Minorista
            </Button>
            <Button
              onClick={handleOnClick}
              id="mayorista"
              className="btn btn-success w-45 text-light"
            >
              Donante Mayorista
            </Button>
          </div>
        ) : (
          ''
        )}
        {minorista ? (
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
        {minorista ? (
          <DonateFoodForm
            category={setCategoryDonation}
            quantity={setQuantityDonation}
            info={setInfoFood}
          />
        ) : (
          ''
        )}
        <div className="contSb">{minorista ? <SubmitButton /> : ''}</div>
      </Form>
      {mayorista ? <ContainerCheck /> : ''}
    </div>
  );
};

export default ContainerDonate;
