import React, { useState } from 'react'

const ListClientesComponent = () => {
  
  
  const[empleados,setEmpleados] = useState([]);

  return (
    <div className='container'>
      <h2 className='text-center'>Lista de empleados</h2>
      <table className='table table-bordered table-striped'>
        <thead>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
        </thead>
        <tbody>
            {
                empleados.map(
                    empleado =>
                        <tr key={ empleado.id }>
                            <td>{ empleado.nombre}</td>
                            <td>{ empleado.apellido}</td>
                            <td>{ empleado.email}</td>
                        </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListClientesComponent
