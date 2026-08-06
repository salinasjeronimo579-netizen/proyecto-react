import { useState } from "react"
import Input from "./ui/Input"
import Button from "./ui/Button"


export function ContactoFormulario({ OnAgregar }) {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [etiqueta, setEtiqueta] = useState("");
    const [empresa, setEmpresa] = useState("");

    const nombreDiligenciado = nombre.trim() !== "";
    const telefonoDiligenciado = telefono.trim() !== "";
    const telefonoValido = telefono.trim().length >= 7 && telefono.trim().length <= 10;
    const correoValido = correo.includes("@");

    const formularioValido = nombreDiligenciado && telefonoDiligenciado && telefonoValido && correoValido;

    return(
        <form className="mx-auto mb-10 grid w-full max-w-[900px] grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3.5 rounded-2xl border border-indigoAccent/25 bg-gradient-to-br from-[#20264d] via-[#191d3a] to-[#12162e] p-6 shadow-[0_10px_30px_rgba(129,140,248,0.15)]">
            <Input
            type="text"
            placeholder="Nombre"
            value={nombre} 
            onChange={(e)=> setNombre(e.target.value)}
            />
            <Input
            type="text"
            placeholder="Correo"
            value={correo} 
            onChange={(e)=> setCorreo(e.target.value)}
            />
            <Input
            type="text"
            placeholder="Teléfono"
            value={telefono} 
            onChange={(e)=> setTelefono(e.target.value)}
            error={telefono && !telefonoValido}
            />
            <Input
            type="text"
            placeholder="Etiqueta"
            value={etiqueta} 
            onChange={(e)=> setEtiqueta(e.target.value)}
            />
            <Input
            type="text"
            placeholder="Empresa"
            value={empresa} 
            onChange={(e)=> setEmpresa(e.target.value)}
            />

            {telefono && !telefonoValido && (
                <p className="col-span-full -mt-1 text-center text-sm text-red-400">El teléfono debe tener entre 7 y 10 números.</p>
            )}
            {correo && !correoValido && (
                <p className="col-span-full -mt-1 text-center text-sm text-red-400">El correo debe contener "@".</p>
            )}
            <Button
            type="button"
            disabled={!formularioValido}
            className="col-span-full min-w-[180px] justify-self-center"
            onClick={() => { OnAgregar(nombre, correo, telefono, etiqueta, empresa); setNombre(""); setCorreo(""); setTelefono(""); setEtiqueta(""); setEmpresa(""); }}
            >Agregar</Button>
        </form>
    )

}
