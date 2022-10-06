import React from 'react'
import { useForm, Resolver } from 'react-hook-form';

const FormVolunt = () => {

type FormValues = {
  nombre: string;
  apellido: string;
  identificacion:number;
  direccion: string;
  contacto:number;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.nombre ? values : {},
    errors: !values.nombre
      ? {
          nombre: {
            type: 'required',
            message: 'Este campo es requerido.',
          },

          apellido:{
            type: 'required',
            message: 'Este campo es requerido.',

          },
          identificacion:{
                 type: 'required',
            message: 'Este campo es requerido.',
            },
            direccion:{
                type: 'required',
                message: 'Este campo es requerido.',
            },
            contacto:{
                type: 'required',
                message: 'Este campo es requerido.',
            }
          
            
        }
      : {},
    
  };
};
const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));



 
  return (
    <form onSubmit={onSubmit}>
      <input {...register("nombre")} placeholder="Bill" />
      {errors?.nombre && <p>{errors.nombre.message}</p>}
      
      <input {...register("apellido")} placeholder="Luo" />
      {errors?.apellido && <p>{errors.apellido.message}</p>}
      <input {...register("identificacion")} placeholder="XXX.XXX.XXX-X" />
      {errors?.identificacion && <p>{errors.identificacion.message}</p>}
      <input {...register("direccion")} placeholder="balcarse" />
      {errors?.direccion && <p>{errors.direccion.message}</p>}
      <input {...register("contacto")} placeholder="balcarse" />
      {errors?.contacto && <p>{errors.contacto.message}</p>}

      <input type="submit" />
    </form>
  )
}
export default FormVolunt