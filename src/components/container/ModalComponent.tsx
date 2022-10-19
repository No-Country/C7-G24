import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link ,useNavigate} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../../styles/Modal.css';
  

function ModalComponent() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="modal-btn" onClick={handleShow}>
        Quiero Ayudar!{' '}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <button
          type="button"
          onClick={handleClose}
          className="button-close"
          aria-label="Close"
        >
          X
        </button>{' '}
        <Modal.Body>
          <Link to="/donate">
            <Button className="button-modal" onClick={handleClose}>
              {' '}
              Sumate Como Donante
            </Button>
          </Link>{' '}
          <Link to="forms">
            <Button className="button-modal" onClick={handleClose}>
              Sumate Como Voluntario
            </Button>
          </Link>
          
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalComponent;
