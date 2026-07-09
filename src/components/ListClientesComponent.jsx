import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

const ListClientesComponent = () => {
  
  
  const[clientes,setClientes] = useState([]);

  useEffect(() => {
    ClienteService.getAllClientes().then(Response => {
        setClientes(Response.data);
        console.log(Response.data);
    }).catch(error => {
        console.log(error);
    })
  },[])

  return (
    <div className='container'>
      <h2 className='text-center'>Lista de clientes</h2>
      <Link to='/add-clientes' className='btn btn-primary mb-2'>Agregar cliente</Link>
      <table className='table table-bordered table-striped'>
        <thead>
            <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                clientes.map(
                    cliente =>
                        <tr key={ cliente.id }>
                            <td>{ cliente.id}</td>
                            <td>{ cliente.nombre}</td>
                            <td>{ cliente.apellido}</td>
                            <td>{ cliente.email}</td>
                        </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListClientesComponent
