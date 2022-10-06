import React,{useState, createRef} from 'react';


const VehicleForm = (/* vehiculo:any */) => {
 const [selected,setSelected]=useState("");

  return (<div>
    
 <select className="btn btn-dropdown btn-success p-1"  name="Vehiculo" value={selected} onChange={(event)=>setSelected(event.target.value)}  >
    <option  value="Camion">Camion</option>
    <option  value="Camioneta">Camioneta</option>
    <option value="Auto">Auto</option>
    <option value="Motocicleta">Motocicleta</option>
    <option  value="Bicicleta">Bicicleta</option>
    </select>
  </div>);
};

export default VehicleForm;