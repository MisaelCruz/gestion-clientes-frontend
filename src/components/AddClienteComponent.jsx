import React, { useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link, useNavigate } from 'react-router-dom';

export const AddClienteComponent = () => {

const[nombre,SetNombre] = useState('');
const[apellido,SetApellido] = useState('');
const[email,SetEmail] = useState('');
const navigate = useNavigate();

const saveCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, apellido, email};
    ClienteService.createCliente(cliente).then((response) => {
        console.log(response.data);
        navigate('/clientes');
    }).catch(error => {
        console.log(error);
    })
}
  
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                <h2 className='text-center'>Registro de clientes</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Nombre</label>
                            <input type='text' 
                            placeholder='Digite su nombre' 
                            name='nombre' 
                            className='form-control'
                            value={nombre}
                            onChange={(e) => SetNombre(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Apellido</label>
                            <input type='text' 
                            placeholder='Digite su apellido' 
                            name='apellido' 
                            className='form-control'
                            value={apellido}
                            onChange={(e) => SetApellido(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input type='text' 
                            placeholder='Digite su email' 
                            name='email' 
                            className='form-control'
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-success' onClick={ (e) => saveCliente(e) }>Guardar</button>
                        &nbsp;&nbsp;
                        <Link to='/clientes' className='btn btn-danger'>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddClienteComponent
