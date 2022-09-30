import React from "react";
import "../styles/Home.css";
import bal from "../assets/bal.png";
import { Link } from "react-router-dom";
import DonateMinForm from "../components/pure/DonateOtherForm";
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
         <Link to="/donate"className="btn home">Quiero Ayudar!</Link>
 </p>
      </div>
      <div className="bg-circle">
        <img  className="bal"src={bal} alt="bal"/>
      </div>
      <DonateMinForm/>
    </div>
  );
};

export default Home;
