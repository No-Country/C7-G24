<<<<<<< HEAD:src/pages/Home.tsx
import React, { Fragment } from 'react';
import '../styles/Home.css';
import CarouselComponent from '../components/container/CarouselComponent';
import Int from '../assets/int.png';
import bal from '../assets/bal.png';
import Header from '../assets/header.png';
import FooterComponent from '../components/container/FooterComponent';
import ModalComponent from '../components/container/ModalComponent';
const Home = () => {
  return (
    <Fragment>
      <div>
        <div className="container">
          <h1>Sumate como donante</h1>
          <p>
            Somos una organización sin fines de lucro, y trabajamos con el
            objetivo de contribuir a la reducción del hambre, mejorar la
            nutrición y evitar el desperdicio de alimentos en Argentina. BdA
            Balcarce es un puente entre quienes sufren hambre y quienes desean
            colaborar para mejorar la situación, a través de donaciones de
            alimentos aptos para el consumo, con el fin de almacenarlos,
            clasificarlos y distribuirlos entre diferentes instituciones. ¡Todos
            podemos ser parte!
          </p>
          <ModalComponent />
          <div className="bg-circle">
            <CarouselComponent />
          </div>
        </div>
        <div className="cite">
          <div>
            <img src={Int} className="cite-Int " alt="int"></img>
            <p className="cite-p">
              Trabajamos para reducir el hambre, mejorar la nutrición y evitar
              el desperdicio de alimentos. Recibimos grandes donaciones de
              alimentos y productos y los distribuimos entre comedores y otras
              organizaciones sociales que dan de comer a personas que lo
              necesitan.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="container-img">
            <p className="comotrabajamos">Como Trabajamos</p>
            <img src={bal} alt="" className="bal-img" />
          </div>
          <div className="container-CTrabajamos">
            <div>
              <div className="span1">1 </div>
              <p className="container-color paso1">Paso 1</p>
              <p className="container-color">
                Recibimos donaciones de alimentos por parte de empresas,
                productores, supermercados y mayoritas.
              </p>
            </div>
          </div>
          <div className="container-CTrabajamos2">
            <div>
              <div className="span2">2</div>
              <p className="container-color2 paso2">Paso 2</p>
              <p className="container-color2">
                Los clasificamos con ayuda de voluntarios
              </p>
            </div>
            <div>
              <div className="span3">3</div>
              <p className="container-color3 paso3">Paso 3</p>
              <p className="container-color3">
                Los almacenamos en nuestro depósito
              </p>
            </div>
          </div>
        </div>
        <div className="container-header">
          <img src={Header} alt="" className="conteo" />
        </div>
      </div>
      <FooterComponent />
    </Fragment>
=======
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import CarouselComponent from '../components/container/CarouselComponent';

const Home = () => {
  return (
    <div className="container">
      <div className="container-left">
        <h1>Sumate como donante</h1>
        <p>
          Somos una organización sin fines de lucro, y trabajamos con el
          objetivo de contribuir a la reducción del hambre, mejorar la nutrición
          y evitar el desperdicio de alimentos en Argentina. BdA Balcarce es un
          puente entre quienes sufren hambre y quienes desean colaborar para
          mejorar la situación, a través de donaciones de alimentos aptos para
          el consumo, con el fin de almacenarlos, clasificarlos y distribuirlos
          entre diferentes instituciones. ¡Todos podemos ser parte!
          <Link to="/donate" className="btn home">
            Quiero Ayudar!
          </Link>
        </p>
      </div>
      <div className="bg-circle">
<CarouselComponent/>      </div>
    </div>
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71:src/Home.tsx
  );
};

export default Home;
