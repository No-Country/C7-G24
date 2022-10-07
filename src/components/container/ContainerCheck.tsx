import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CompanyForm from '../pure/CompanyForm';
import VoluntaryForm from '../pure/VoluntaryForm';
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
  const [stateSoyPersona, setStateSoyPersona] = useState(true);
  const [stateSoyEmpresa, setStateSoyEmpresa] = useState(true);
  const context = useAppContext();

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
        setStateSoyEmpresa(false);
        break;
      case 'empresa':
        setSoyEmpresa(e.target.checked);
        setStateSoyPersona(false);
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
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitVoluntaryForm}
        className="form-c"
      >
        {stateSoyPersona && stateSoyEmpresa ? (
          <div>
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
          </div>
        ) : (
          ''
        )}

        {soyPersona ? (
          <div>
            <VoluntaryForm
              name={setName}
              lastName={setLastName}
              phone={setPhone}
              mail={setMail}
              dni={setDni}
            />
            <Form.Group as={Col} md="2">
              <div className="check-form1">
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
              </div>
            </Form.Group>
            {donateFood && soyPersona ? (
              <DonateFoodForm
                category={setCategoryDonation}
                quantity={setQuantityDonation}
                info={setInfoFood}
              />
            ) : (
              ''
            )}
            {otherDonate && soyPersona ? (
              <DonateOthersForm
                otherDonate={setInfoOtherDonate}
                quantityOtherDonate={setQuantityOtherDonate}
              />
            ) : (
              ''
            )}
            <div className="conditionSb">
              <SubmitButton />
            </div>
          </div>
        ) : (
          ''
        )}
        {soyEmpresa ? (
          <div>
            <CompanyForm
              nameCompany={setCompanyName}
              addres={setCompanyAddres}
              typeCompany={setTypeCompany}
              cuit={setCuit}
              mail={setMailCompany}
              phone={setPhoneCompany}
            />
            <Form.Group as={Col} md="2">
              <div className="check-form2">
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
              </div>
            </Form.Group>
            {donateFood && soyEmpresa ? (
              <div className="conditionDonateFood">
                <DonateFoodForm
                  category={setCategoryDonation}
                  quantity={setQuantityDonation}
                  info={setInfoFood}
                />
              </div>
            ) : (
              ''
            )}
            {otherDonate && soyEmpresa ? (
              <div className="conditionDonateOther">
                <DonateOthersForm
                  otherDonate={setInfoOtherDonate}
                  quantityOtherDonate={setQuantityOtherDonate}
                />
              </div>
            ) : (
              ''
            )}
            <div className="conditionSb">
              <SubmitButton />
            </div>
          </div>
        ) : (
          ''
        )}
      </Form>
    </div>
  );
};

export default ContainerCheck;
