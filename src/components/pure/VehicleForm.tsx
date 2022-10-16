import React, { Fragment } from 'react';

const VehicleForm = ({ vehicle, setVehicle }: any) => {
  const onChangeVehicle = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setVehicle(value);
  };

  return (
    <Fragment>
      <select
        className="btn btn-dropdown btn-success p-1"
        name="Vehiculo"
        onChange={() => onChangeVehicle}
        value={vehicle}
      >
        <option value="Camion">Camion</option>
        <option value="Camioneta">Camioneta</option>
        <option value="Auto">Auto</option>
        <option value="Motocicleta">Motocicleta</option>
        <option value="Bicicleta">Bicicleta</option>
      </select>
    </Fragment>
  );
};

export default VehicleForm;
