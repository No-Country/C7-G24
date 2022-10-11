import React, { Fragment } from 'react';

const VehicleForm = ({ vehicle }: any) => {
  const onChangeVehicle = (event: { target: { value: any } }) => {
    const value = event.target.value;
    vehicle(value);
  };

  return (
    <Fragment>
      <select
        className="btn btn-dropdown btn-success p-1"
        name="Vehiculo"
        onChange={() => onChangeVehicle}
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
