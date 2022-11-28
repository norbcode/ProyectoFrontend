import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import '../../src/style.css';
//import '../style.css';

const URI = 'http://localhost:8000/usuarios/reguser'

export const CompCreateUser = () => {
   // const [nombre, setTitle] = useState('')
    const [correo, setContent] = useState('')
    const [nomuser, setUsuario] = useState('')
    const [password, setPass] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {correo:correo, nomuser: nomuser, password: password})
        navigate('/users')
    }   

    return (
        <div className="login-form">
           <h3>Creación de  Usuarios</h3>
           <form onSubmit={store}>
                 
                <div>

                <input
                        value={nomuser}
                        onChange={ (e)=> setUsuario(e.target.value)} 
                        type="text"
                        placeholder = "Ingrese su nombre"
                    />    
                     
                                 
                  </div>

                  <div>
                  <input
                        value={correo}
                        onChange={ (e)=> setContent(e.target.value)} 
                        type="email"
                        placeholder = "Correo"
                    />    
                             
                 </div>
                 <div>
                 
                    <input 
                        value={password}
                        onChange={ (e)=> setPass(e.target.value)} 
                        type = "password"
                        className='form-control'
                        placeholder = "Password"
                    />                 
                 </div>
                 <button type="submit" className="btn-register">Guardar</button>                  
           </form>
        </div>
    )
}

export default CompCreateUser