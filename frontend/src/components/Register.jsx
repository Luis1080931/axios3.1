import React, { useRef } from 'react'
import axios from 'axios'
import '../App.css'

const Register = () => {

  const baseURL = "http://localhost:3000/usuarios/registrar"

  const identificacion = useRef(null)
  const telefono = useRef(null)
  const nombre = useRef(null)
  const correo_electronico = useRef(null)
  const tipo_usuario = useRef(null)
  const password = useRef(null)

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      const data = {
        identificacion: parseInt(identificacion.current.value),
        telefono: telefono.current.value,
        nombre: nombre.current.value,
        correo_electronico: correo_electronico.current.value,
        tipo_usuario: tipo_usuario.current.value,
        password: password.current.value
      }

      await axios.post(baseURL, data).then((response) => {
        console.log(response)
        if(response.status == 201){
          alert('User registrado con exito')
        }else{
          alert('Error de registro de user')
        }
      })

    } catch (error) {
      console.log(error)
      alert('Error del servidor' + error)
    }
  }

  return (
    <>
    <h1> Registro de usuario </h1>
      <form method='post' onSubmit={handleSubmit}>
        <div className='containers'>
          <label> Identificacion: </label>
          <input type="number" name='identificacion' id='identificacion' placeholder='Ingrese su identificacion' ref={identificacion} />
        </div>
        <div className='containers'>
          <label> Telefono: </label>
          <input type="text" name='telefono' id='telefono' placeholder='Ingrese su telefono' ref={telefono} />
        </div>
        <div className='containers'>
          <label> Nombre: </label>
          <input type="text" name='nombre' id='nombre' placeholder='Ingrese su nombre' ref={nombre} />
        </div>
        <div className='containers'>
          <label> Correo electronico: </label>
          <input type="text" name='correo_electronico' id='correo_electronico' placeholder='Ingrese su correo' ref={correo_electronico} />
        </div>
        <div className='containers'>
          <label> Tipo de usuario: </label>
          <select name='tipo_usuario' id='tipo_usuario' ref={tipo_usuario}>
            <option> Seleccione </option>
            <option value="catador"> Catador </option>
            <option value="caficultor"> Caficultor </option>
          </select>
        </div>
         <div className='containers'>
          <label> Contraseña:  </label>
          <input type="password" name="password" id="password" placeholder='Ingrese su contraseña' ref={password} />
         </div>

         <button className='button' type='submit'> Registrar </button>
      </form>
    </>
  )
}

export default Register
