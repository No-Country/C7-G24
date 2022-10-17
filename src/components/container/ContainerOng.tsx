import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import OngForm from '../pure/OngForm';
import SubmitButton from '../SubmitButton';
import Fondo4 from '../../assets/11.jpeg';
import axios from '../../http-common-ongs';
import '../../styles/ContainerOng.css';
import FooterComponent from './FooterComponent';

const ContainerOng = () => {
  const [validated, setValidated] = useState(false);
  const [pName, setPName] = useState('');
  const [pLastName, setPLastName] = useState('');
  const [cuitOng, setCuitOng] = useState('');
  const [emailOng, setEmailOng] = useState('');
  const [phoneOng, setPhoneOng] = useState('');
  const [nameOng, setNameOng] = useState('');
  const [addressOng, setAddressOng] = useState('');
  const [typeOng, setTypeOng] = useState('');
  const navigate = useNavigate();

  const handleOnSubmitOngForm = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    type CreateNeedHelp = {
      pName: string;
      pLastName: string;
      emailOng: string;
      phoneOng: string;
      nameOng: string;
      addressOng: string;
      typeOng: string;
    };

    const needHelpOng = {
      ongname: nameOng,
      ongcuit: cuitOng,
      ongreason: typeOng,
      ongheadnm: pName,
      ongheadln: pLastName,
      ongaddress: addressOng,
      ongphone: phoneOng,
      ongemail: emailOng,
    };
    try {
      await axios.post<CreateNeedHelp>('/create', needHelpOng);
    } catch (error) {}
    navigate('/gratitude');
  };

  return (
    <div>
      <img src={Fondo4} alt="" className="fondo4" />
      <Form
        className="formong p-5"
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitOngForm}
      >
        <OngForm
          pName={setPName}
          pLastName={setPLastName}
          cuitOng={setCuitOng}
          emailOng={setEmailOng}
          phoneOng={setPhoneOng}
          nameOng={setNameOng}
          addressOng={setAddressOng}
          typeOng={setTypeOng}
        />
        <div className="submitButtonFormOng">
          <SubmitButton />
        </div>
      </Form>
      <Fragment>
        <FooterComponent />
      </Fragment>
    </div>
  );
};

export default ContainerOng;
