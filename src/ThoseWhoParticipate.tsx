<<<<<<< HEAD
import React, { Fragment } from 'react';
import '../styles/Participate.css';
import ImgA from '../assets/5.jpg';
import ImgB from '../assets/6.jpeg';
import ImgC from '../assets/7.jpg';
import Granix from '../assets/GRANIX.jpg';
import Nutrien from '../assets/NUTRIEN.png';
import Mccain2 from '../assets/mccain2.png';
import Laserenisima from '../assets/laserenisima.png';
import Coiron from '../assets/coiron.svg';
import Carrefour from '../assets/Carrefour.png';
import FooterComponent from '../components/container/FooterComponent';

const ThoseWhoParticipate = () => {
  return (
    <Fragment>
      <div className="header-participate">
        <h1 className="header-h1">¿Quienes participan?</h1>

        <p className="p-header">
          Todos somos voluntarios, cada uno desde su lugar. asi, se consolida un
          equipo de fortalezas en el que cada parte es fundamental
        </p>
      </div>
      <div className="container">
        <div className="voluntary">
          <img src={ImgA} className="ImgA" alt="" />
          <div>
            <h3 className="header-h3">Voluntarios</h3>
            <p className="parrafo-v">
              Javir Fornieles. Fernando Mendoza. Maximiliano Garcia. Macela
              Boullon. Carlos Irazoqui. Toman Martorello. Julien Laurencon.
              Julieta Fuentes. Alejandra Yommi. Laura Oveja Smith. Maria Celia
              Duy. Mariela Barda. Nicolas Santamaria. Beatriz Garcia. Manuela
              Cucci. Pablo Buceta. Victoria Quillenhauquy.
            </p>
          </div>
        </div>
        <div className="voluntary-d">
          <img src={ImgC} className="ImgB" alt="" />
          <div>
            <h3 className="header-h3-d">
              Voluntarios de la Comision Directiva
            </h3>
            <p className="parrafo-d">
              Ma. Elkisabel Qeilenmann. Ma. Ines Leaden. Ma. Eugenia Bazzalo.
              Laura Dimuro. Lourdes Filipini. Ma. Paz Irazoqui. Ana Moyano.
              Lujan Nagore. Marta Paidon. Noemi Del Grosso de Capperi. Nicolas
              Cerono. Silvia Zitarosa. Graciela Minichiello. Julian Chiocarello.
              Daniel Cucci. Manuela Cucci. Maria Celia Duy. Nicolas Santamaria.
              Andres Olivares. Jorge Ledezma. Agustin Odriozola. Victoria
              Quillenhauquy. Mariela Signes. Lucia Menucci.
            </p>
          </div>
        </div>
        <div className="voluntary">
          <img src={ImgB} className="ImgC" alt="" />
          <div>
            <h3 className="header-h3-e">
              Voluntarios en funciones especificas
            </h3>
            <p className="parrafo-e">
              Cecilia Aicega (Escribania). Florencia Mancini (Nutricion).
              Santiago Scioli (Recursos). Guillermina Muñoz Barda (Asuntos
              Legales). Manuel MArtinez Nava (Diseño Grafico). Jorge Gianetti
              (Logistica). Matias Santini (Recursos). Francisco Garcia
              (Recursos). Josefina Muñoz (Redes)
            </p>
          </div>
        </div>
        <div className="cont-title">
          <h3 className="header-h3-Emp"> Empresas Donantes</h3>
        </div>
        <div className="container-logos">
          <img className="img-granix" src={Granix} alt="" />
          <img className="img-nutrien" src={Nutrien} alt="" />
          <img className="img-logos" src={Mccain2} alt="" />
          <img className="img-logos" src={Laserenisima} alt="" />
          <img className="img-logos" src={Coiron} alt="" />
          <img className="img-logos" src={Carrefour} alt="" />
        </div>
      </div>
      <FooterComponent />
    </Fragment>
  );
};

export default ThoseWhoParticipate;
=======
import React, { Fragment } from 'react';
import '../styles/Participate.css';
import ImgA from '../assets/5.jpg';
import ImgB from '../assets/6.jpeg';
import ImgC from '../assets/7.jpg';
import Granix from '../assets/GRANIX.jpg';
import Nutrien from '../assets/NUTRIEN.png';
import Mccain2 from '../assets/mccain2.png';
import Laserenisima from '../assets/laserenisima.png';
import Coiron from '../assets/coiron.svg';
import Carrefour from '../assets/Carrefour.png';
import FooterComponent from '../components/container/FooterComponent';

const ThoseWhoParticipate = () => {
  return (
    <Fragment>
      <div className="header-participate">
        <h1 className="header-h1">¿Quienes participan?</h1>

        <p className="p-header">
          Todos somos voluntarios, cada uno desde su lugar. asi, se consolida un
          equipo de fortalezas en el que cada parte es fundamental
        </p>
      </div>
      <div className="container">
        <div className="voluntary">
          <img src={ImgA} className="ImgA" alt="" />
          <div>
            <h3 className="header-h3">Voluntarios</h3>
            <p className="parrafo-v">
              Javir Fornieles. Fernando Mendoza. Maximiliano Garcia. Macela
              Boullon. Carlos Irazoqui. Toman Martorello. Julien Laurencon.
              Julieta Fuentes. Alejandra Yommi. Laura Oveja Smith. Maria Celia
              Duy. Mariela Barda. Nicolas Santamaria. Beatriz Garcia. Manuela
              Cucci. Pablo Buceta. Victoria Quillenhauquy.
            </p>
          </div>
        </div>
        <div className="voluntary-d">
          <img src={ImgC} className="ImgB" alt="" />
          <div>
            <h3 className="header-h3-d">
              Voluntarios de la Comision Directiva
            </h3>
            <p className="parrafo-d">
              Ma. Elkisabel Qeilenmann. Ma. Ines Leaden. Ma. Eugenia Bazzalo.
              Laura Dimuro. Lourdes Filipini. Ma. Paz Irazoqui. Ana Moyano.
              Lujan Nagore. Marta Paidon. Noemi Del Grosso de Capperi. Nicolas
              Cerono. Silvia Zitarosa. Graciela Minichiello. Julian Chiocarello.
              Daniel Cucci. Manuela Cucci. Maria Celia Duy. Nicolas Santamaria.
              Andres Olivares. Jorge Ledezma. Agustin Odriozola. Victoria
              Quillenhauquy. Mariela Signes. Lucia Menucci.
            </p>
          </div>
        </div>
        <div className="voluntary">
          <img src={ImgB} className="ImgC" alt="" />
          <div>
            <h3 className="header-h3-e">
              Voluntarios en funciones especificas
            </h3>
            <p className="parrafo-e">
              Cecilia Aicega (Escribania). Florencia Mancini (Nutricion).
              Santiago Scioli (Recursos). Guillermina Muñoz Barda (Asuntos
              Legales). Manuel MArtinez Nava (Diseño Grafico). Jorge Gianetti
              (Logistica). Matias Santini (Recursos). Francisco Garcia
              (Recursos). Josefina Muñoz (Redes)
            </p>
          </div>
        </div>
        <div className="cont-title">
          <h3 className="header-h3-Emp"> Empresas Donantes</h3>
        </div>
        <div className="container-logos">
          <img className="img-granix" src={Granix} alt="" />
          <img className="img-nutrien" src={Nutrien} alt="" />
          <img className="img-logos" src={Mccain2} alt="" />
          <img className="img-logos" src={Laserenisima} alt="" />
          <img className="img-logos" src={Coiron} alt="" />
          <img className="img-logos" src={Carrefour} alt="" />
        </div>
      </div>
      <FooterComponent />
    </Fragment>
  );
};

export default ThoseWhoParticipate;
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc
