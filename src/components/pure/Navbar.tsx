import React from 'react';
import '../../styles/NavBar.css';
import { NavLink, Link } from 'react-router-dom';
<<<<<<< HEAD
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoPicture from '../../assets/logoBalcarce.png';
import ModalComponent from '../container/ModalComponent';

const NavBar = () => {
  return (
    <div>
      <Navbar variant="light">
        <div>
          <Link to="home">
            <img src={logoPicture} alt="BDA" className="logo" />
          </Link>
        </div>
        <div className="d-flex">
          <Nav className="d-flex nav  gap-5 mt-3 ">
=======
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoPicture from '../../assets/logo.png';

const NavBar = () => {
  return (
    <>
      <Navbar variant="light">
        <div className="d-flex  gap-5">
          <Link to="home" className="mx-5">
            <img src={logoPicture} alt="BDA" width="50" />
          </Link>
          <Nav className="d-flex  gap-5 mt-3 ">
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
            <NavLink
              to="home"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
<<<<<<< HEAD
              to="thosewhoparticipate"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Quienes Participan
            </NavLink>
            <NavLink
              to="news"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Novedades
            </NavLink>
            <NavLink
              to="recibirAyuda"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Contacto
            </NavLink>
            <div>
              <Link to="recibirAyuda" className="botonR letras">
                Recibir Ayuda
              </Link>
            </div>
            <div>
              <ModalComponent />
            </div>
=======
              to="donate"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Doná
            </NavLink>
            <NavLink
              to="forms"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Ser Voluntario
            </NavLink>
            <div className="botonR">
              <Link to="recibirAyuda">Recibir Ayuda</Link>
            </div>
            <Link to="/donate" className="btn help">
            Quiero Ayudar!
          </Link>
>>>>>>> fbe3ffdb9510254c6471782b661e86fea7293c71
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
