<<<<<<< HEAD
import React, { Fragment } from 'react';
import '../styles/News.css';
import ImgA from '../assets/6.jpeg';
import ImgB from '../assets/3.jpeg';
import ImgC from '../assets/5.jpg';
import ImgD from '../assets/bal.png';
import ImgE from '../assets/7.jpg';
import ImgF from '../assets/8.jpeg';
import FooterComponent from '../components/container/FooterComponent';

const News = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="header-new">Novedades</h1>
        <a
          href="https://www.lanacion.com.ar/economia/campo/rescatan-y-reparten-mas-de-50000-kilos-por-mes-de-verduras-y-frutas-para-ayudar-nid11032021/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-img">
            <img className="img-news" src={ImgA} alt="" />
            <h4 className="header-h4">
              Rescatan y reparten mas de 50.000 kilos por mes de verduras y
              frutas
            </h4>
            <p className="p-new1">
              Banco de Alimentos de Balcarce, Tandil y Mar del Plata armaron un
              centro de recuperacion en esa ultima ciudad, suman al INTA para un
              trabajo en conjunto.
            </p>
          </div>
        </a>
        <a
          href="https://www.redbda.org.ar/post/salvando-las-papas"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new1">
            <img className="img-news1" src={ImgB} alt="" />
            <h4 className="header-h4">
              Se logro desde Balcarce el mayor rescate <br />
              de alimentos de la historia de Argentina
            </h4>
            <p className="p-new1">
              El banco de alimentos anuncio que luego de cinco meses de trabajo
              junto a McCain y muchos voluntarios lograron el mayor rescate de
              la historia.
            </p>
          </div>
        </a>
        <a
          href="https://intainforma.inta.gob.ar/el-inta-se-une-al-banco-de-alimentos-de-balcarce/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new2">
            <img className="img-news2" src={ImgC} alt="" />
            <h4 className="header-h4">
              El INTA se une al Banco de Alimentos <br />
              de Balcarce
            </h4>
            <p className="p-new1">
              El INTA firmo un acuerdo con el Banco de Alimentos de Balcarce
              para rescatar frutas y verduras que se desechan por diferentes
              defectos.
            </p>
          </div>
        </a>
        <a
          href=" https://www.minutobalcarce.com.ar/balcarce-solidario-desde-el-banco-de-alimentos-ya-distribuyeron-25-millones-de-kilos-de-papas-a-todo-el-pais/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new3">
            <img className="img-news3" src={ImgD} alt="" />
            <h4 className="header-h4">
              Ya se distribuyeron mas de 2,5 millones de kilos de papas a todo
              el pais
            </h4>
          </div>
        </a>
        <a
          href="https://noticias.autocosmos.com.ar/2021/05/06/volkswagen-argentina-basf-y-banco-de-alimentos-balcarce-se-unen-para-la-recuperacion-de-alimentos"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new4">
            <img className="img-news4" src={ImgE} alt="" />
            <h4 className="header-h4">
              Volkswagen Group Argentina, BASF <br />y Banco de Alimentos
              Balcarce se unen
            </h4>
            <p className="p-new2">
              La alianza permitio distribuir alimentos con gran valor
              nutricional a mas de 25.000 personas en situacion de
              vulnerabilidad social en gran parte del pais.
            </p>
          </div>
        </a>
        <a
          href=" https://www.lanacion.com.ar/sociedad/bancos-de-alimentos-como-buscan-recuperar-los-16-millones-de-toneladas-que-se-desperdician-por-ano-nid04072022/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new5">
            <img className="img-news2" src={ImgF} alt="" />
            <h4 className="header-h4">
              Como buscan recuperar los 16 millones <br />
              de toneladas que se desperdician por año
            </h4>
            <p className="p-new1">
              La alianza de agricultores y mercados concentrados de productos es
              una de las acciones que impulsan.
            </p>
          </div>
        </a>
      </div>
      <FooterComponent />
    </Fragment>
  );
};

export default News;
=======
import React, { Fragment } from 'react';
import '../styles/News.css';
import ImgA from '../assets/6.jpeg';
import ImgB from '../assets/3.jpeg';
import ImgC from '../assets/5.jpg';
import ImgD from '../assets/bal.png';
import ImgE from '../assets/7.jpg';
import ImgF from '../assets/8.jpeg';
import FooterComponent from '../components/container/FooterComponent';

const News = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="header-new">Novedades</h1>
        <a
          href="https://www.lanacion.com.ar/economia/campo/rescatan-y-reparten-mas-de-50000-kilos-por-mes-de-verduras-y-frutas-para-ayudar-nid11032021/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-img">
            <img className="img-news" src={ImgA} alt="" />
            <h4 className="header-h4">
              Rescatan y reparten mas de 50.000 kilos por mes de verduras y
              frutas
            </h4>
            <p className="p-new1">
              Banco de Alimentos de Balcarce, Tandil y Mar del Plata armaron un
              centro de recuperacion en esa ultima ciudad, suman al INTA para un
              trabajo en conjunto.
            </p>
          </div>
        </a>
        <a
          href="https://www.redbda.org.ar/post/salvando-las-papas"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new1">
            <img className="img-news1" src={ImgB} alt="" />
            <h4 className="header-h4">
              Se logro desde Balcarce el mayor rescate <br />
              de alimentos de la historia de Argentina
            </h4>
            <p className="p-new1">
              El banco de alimentos anuncio que luego de cinco meses de trabajo
              junto a McCain y muchos voluntarios lograron el mayor rescate de
              la historia.
            </p>
          </div>
        </a>
        <a
          href="https://intainforma.inta.gob.ar/el-inta-se-une-al-banco-de-alimentos-de-balcarce/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new2">
            <img className="img-news2" src={ImgC} alt="" />
            <h4 className="header-h4">
              El INTA se une al Banco de Alimentos <br />
              de Balcarce
            </h4>
            <p className="p-new1">
              El INTA firmo un acuerdo con el Banco de Alimentos de Balcarce
              para rescatar frutas y verduras que se desechan por diferentes
              defectos.
            </p>
          </div>
        </a>
        <a
          href=" https://www.minutobalcarce.com.ar/balcarce-solidario-desde-el-banco-de-alimentos-ya-distribuyeron-25-millones-de-kilos-de-papas-a-todo-el-pais/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new3">
            <img className="img-news3" src={ImgD} alt="" />
            <h4 className="header-h4">
              Ya se distribuyeron mas de 2,5 millones de kilos de papas a todo
              el pais
            </h4>
          </div>
        </a>
        <a
          href="https://noticias.autocosmos.com.ar/2021/05/06/volkswagen-argentina-basf-y-banco-de-alimentos-balcarce-se-unen-para-la-recuperacion-de-alimentos"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new4">
            <img className="img-news4" src={ImgE} alt="" />
            <h4 className="header-h4">
              Volkswagen Group Argentina, BASF <br />y Banco de Alimentos
              Balcarce se unen
            </h4>
            <p className="p-new2">
              La alianza permitio distribuir alimentos con gran valor
              nutricional a mas de 25.000 personas en situacion de
              vulnerabilidad social en gran parte del pais.
            </p>
          </div>
        </a>
        <a
          href=" https://www.lanacion.com.ar/sociedad/bancos-de-alimentos-como-buscan-recuperar-los-16-millones-de-toneladas-que-se-desperdician-por-ano-nid04072022/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-new5">
            <img className="img-news2" src={ImgF} alt="" />
            <h4 className="header-h4">
              Como buscan recuperar los 16 millones <br />
              de toneladas que se desperdician por año
            </h4>
            <p className="p-new1">
              La alianza de agricultores y mercados concentrados de productos es
              una de las acciones que impulsan.
            </p>
          </div>
        </a>
      </div>
      <FooterComponent />
    </Fragment>
  );
};

export default News;
>>>>>>> c5998c77fe7204c3ab57d21ebfee16b3c0779acc
