import { useState } from "react"


export function ContactoFormulario({OnAgregar}) {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [etiqueta, setEtiqueta] = useState("");

    const nombreDiligenciado = nombre.trim() !== "";
    const telefonoDiligenciado = telefono.trim() !== "";
    const telefonoValido = telefono.trim().length >= 7 && telefono.trim().length <= 10;
    const correoValido = correo.includes("@");

    const formularioValido = nombreDiligenciado && telefonoDiligenciado && telefonoValido && correoValido;

    return(
        <form action="" className="contacto-form">
            <input type="text"
            placeholder="Nombre"
            value={nombre} 
            onChange={(e)=> setNombre(e.target.value)}
            />
            <input type="text"
            placeholder="Correo"
            value={correo} 
            onChange={(e)=> setCorreo(e.target.value)}
            />
            <input type="text"
            placeholder="Teléfono"
            value={telefono} 
            onChange={(e)=> setTelefono(e.target.value)}
            className={telefono && !telefonoValido ? "input-error" : ""}
            />
            <input type="text"
            placeholder="Etiqueta"
            value={etiqueta} 
            onChange={(e)=> setEtiqueta(e.target.value)}
            />
            {telefono && !telefonoValido && (
                <p className="form-error">El teléfono debe tener entre 7 y 10 números.</p>
            )}
            {correo && !correoValido && (
                <p className="form-error">El correo debe contener "@".</p>
            )}
            <button type="button" disabled={!formularioValido} onClick={() => { OnAgregar(nombre, correo, telefono, etiqueta); setNombre(""); setCorreo(""); setTelefono(""); setEtiqueta(""); }}>Agregar</button>
        </form>
    )

}
