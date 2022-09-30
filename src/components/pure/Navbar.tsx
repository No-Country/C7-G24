import React from 'react';
import '../../styles/NavBar.css';
import { NavLink, Link } from 'react-router-dom';
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
            <NavLink
              to="home"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
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
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
