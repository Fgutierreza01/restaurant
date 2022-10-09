import { useState } from "react"
import Input from "../components/Input"
import {db} from "../config/firebase"
import { collection, addDoc } from "firebase/firestore"
import toast, {Toaster} from "react-hot-toast"
const Contacto = () =>{
    const [nuevoMensaje, setNuevoMensaje]=useState({})
    const handleInput=(evento)=>{
        setNuevoMensaje({
            ...nuevoMensaje,[evento.target.name]:evento.target.value
        })
    }
    const guardarMensaje = async (evento)=>{
        evento.preventDefault()
        await addDoc(collection(db,'mensajes'),nuevoMensaje)
        toast.success('Mensaje Enviado!')
    }
    return(
      <div className="contact">
        <h1>Contacto</h1>
        <Toaster/>
        <form>
            <Input label='Nombre:' id='name' handleInput={(evento)=>handleInput(evento)}/>
            <Input label='Correo:' id='email' type='email' handleInput={(evento)=>handleInput(evento)}/>
            <Input label='Teléfono:' id='fono' handleInput={(evento)=>handleInput(evento)}/>
            <label htmlFor="mensaje">Escribe tu mensaje</label>
            <textarea name='mensaje' id='mensaje' onChange={(evento)=>handleInput(evento)}></textarea>
            <button onClick={(evento)=>guardarMensaje(evento)}>Enviar Mensaje</button>
        </form>
      </div>
    )
}
export default Contacto