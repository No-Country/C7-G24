import React, { useState } from 'react';
import '../../styles/NavBar.css';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoPicture from '../../assets/isologotipo.png';
import ModalComponent from '../container/ModalComponent';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  const [active, setActive] = useState('default');

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">
          <img src={logoPicture} alt="BDA" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="container-navbar" id="basic-navbar-nav">
          <Nav
            className="me-auto"
            activeKey={active}
            onSelect={(selectedKey: any) => setActive(selectedKey)}
          >
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
            <div className="py-3">
              <Link to="recibirAyuda" className="botonR letras">
                Recibir Ayuda
              </Link>{' '}
            </div>{' '}
            <div className="containtModal">
              <ModalComponent />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
