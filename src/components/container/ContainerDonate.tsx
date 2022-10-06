import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DonateFoodForm from '../pure/DonateFoodForm';
import VoluntaryForm from '../pure/VoluntaryForm';
import SubmitButton from '../SubmitButton';
import ContainerCheck from './ContainerCheck';
<<<<<<< HEAD
import { useAppContext } from '../../context/Context';

const ContainerDonate = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [dni, setDni] = useState('');
  const [categoryDonation, setCategoryDonation] = useState('');
  const [quantityDonation, setQuantityDonation] = useState('');
  const [infoFood, setInfoFood] = useState('');
=======

const ContainerDonate = () => {
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
  const [minorista, setMinorista] = useState(false);
  const [mayorista, setMayorista] = useState(false);
  const [validated, setValidated] = useState(false);

<<<<<<< HEAD
  const context = useAppContext();

=======
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
<<<<<<< HEAD

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
=======
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
  };

  const handleOnClick = (event: any) => {
    const id = event.target.id;
    switch (id) {
      case 'minorista':
        setMinorista(!minorista);
        setMayorista(false);
        break;
      default:
      case 'mayorista':
        setMayorista(!mayorista);
        setMinorista(false);
        break;
    }
  };

  return (
    <div className="p-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <a
          target="_blank"
          href="https://donaronline.org/banco-de-alimentos-balcarce-asociacion-civil/menos-hambre-mas-futuro?fbclid=IwAR2prtk1DrSU8RFir_eupbbWsWJewtABDPkNOo2SGAXh1e0rr5bmSm75-dY"
          className="btn w-45 btn-success text-light "
          rel="noreferrer"
        >
          {' '}
          Donar Efectivo
        </a>
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
<<<<<<< HEAD
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
        {minorista ? <SubmitButton /> : ''}
      </Form>
      {mayorista ? <ContainerCheck /> : ''}
=======
        {minorista ? <VoluntaryForm /> : ''}
        {minorista ? <DonateFoodForm /> : ''}
        {minorista ? <SubmitButton /> : ''}
        {mayorista ? <ContainerCheck /> : ''}
      </Form>
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
    </div>
  );
};

export default ContainerDonate;
