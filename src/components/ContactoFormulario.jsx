import { useState } from "react"


export function ContactoFormulario({OnAgregar}) {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [etiqueta, setEtiqueta] = useState("");

    return(
        <>
        <form action="">
            <input type="text" 
            value={nombre} 
            onChange={(e)=> setNombre(e.target.value)}
            />
            <input type="text" 
            value={apellido} 
            onChange={(e)=> setApellido(e.target.value)}
            />
            <input type="text" 
            value={telefono} 
            onChange={(e)=> setTelefono(e.target.value)}
            />
            <input type="text" 
            value={etiqueta} 
            onChange={(e)=> setEtiqueta(e.target.value)}
            />
            <button type="button" onClick={() => OnAgregar(nombre, apellido, telefono, etiqueta)}>Agregar</button>
        </form>
        </>

    )

}