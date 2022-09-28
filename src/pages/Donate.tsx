import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import ContainerCheck from '../components/container/ContainerCheck';

const Donate = () => {
  const [minorista, setMinorista]= useState(false)
  const [mayorista, setMayorista]= useState(false)

  const handleOnClick = (event : any) => {
    const id = event.target.id
    switch (id) {
      case "minorista":
        setMinorista(!minorista)
        break;
      default:
        case "mayorista":
        setMayorista(!mayorista)
        break;
        
    }
  };


  return (
  
    <div className=" p-5  text-center">
      <a target="_blank" href="https://donaronline.org/banco-de-alimentos-balcarce-asociacion-civil/menos-hambre-mas-futuro?fbclid=IwAR2prtk1DrSU8RFir_eupbbWsWJewtABDPkNOo2SGAXh1e0rr5bmSm75-dY" className="btn w-45 btn-success text-light "> Donar Efectivo</a>
      <Button   onClick={handleOnClick} id="minorista" className="btn m-5 w-45 btn-success text-light" >
        Donante Minorista
      </Button>
      {minorista ? "Hola" : ""}
      <Button onClick={handleOnClick} id="mayorista" className="btn btn-success w-45 text-light" >
        Donante Mayorista
      </Button>
      {mayorista ? <ContainerCheck/> : ""}
    </div>

  )
}

export default Donate