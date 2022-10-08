import React from 'react';
import '../../styles/NavBar.css';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoPicture from '../../assets/isologotipo.png';
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
            <NavLink
              to="home"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
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
              to="contacto"
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
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
