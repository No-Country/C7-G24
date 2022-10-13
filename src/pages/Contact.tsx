import React, { Fragment } from 'react';
import Ws from '../assets/wsLogo.png';
import Dolar from '../assets/signoDolar.png';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import LinkedIn from '../assets/linkedin.svg';
import '../styles/Contact.css';
import Fondo2 from '../assets/9 .jpeg';
import FooterComponent from '../components/container/FooterComponent';

const Contact = () => {
  return (
    <div>
      <img src={Fondo2} alt="" className="fondo3" />
      <div className="containerContact p-5">
        <a
          href="https://donaronline.org/banco-de-alimentos-balcarce-asociacion-civil/menos-hambre-mas-futuro"
          target="_blank"
          rel="no reference noreferrer"
          className="redirect"
        >
          Donar Online
          <img src={Dolar} alt="Dolar" className="dolar" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=542266446438&text=¡Hola!%20Quiero%20colaborar%20con%20el%20BDA%20"
          target="_blank"
          rel="no reference noreferrer"
          className="redirect"
        >
          Tengo algo para donar
          <img src={Ws} alt="Whatsapp" className="whatsapp" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=542266446438&text=¡Hola!%20Quiero%20colaborar%20con%20el%20BDA%20"
          target="_blank"
          rel="no reference noreferrer"
          className="redirect"
        >
          Quiero ser voluntario
          <img src={Ws} alt="Whatsapp" className="whatsapp" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=542266448249&text=¡Hola!%20Me%20gustaría%20recibir%20la%20ayuda%20del%20BDA"
          target="_blank"
          rel="no reference noreferrer"
          className="redirect"
        >
          Área Social - Asistencia BDA
          <img src={Ws} alt="Whatsapp" className="whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/bancodealimentosbalcarce/"
          target="_blank"
          rel="no reference noreferrer"
          className="redirect"
        >
          Instagram BDA
          <img src={Instagram} alt="Whatsapp" className="social" />
        </a>
        <a
          href="https://www.linkedin.com/company/banco-de-alimentos-balcarce/"
          target="_blank"
          rel="no reference noreferrer"
          className="redirect"
        >
          LinkedIn BDA
          <img src={LinkedIn} alt="Whatsapp" className="social" />
        </a>
        <a
          href="https://www.facebook.com/bdabalcarce"
          target="_blank"
          rel="no reference noreferrer"
          className="redirect"
        >
          Facebook BDA
          <img src={Facebook} alt="Whatsapp" className="social" />
        </a>
      </div>
      <Fragment>
        <FooterComponent />
      </Fragment>
    </div>
  );
};

export default Contact;
