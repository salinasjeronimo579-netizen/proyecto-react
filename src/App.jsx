import Saludo from "./components/saludo";
import ContactoCard from "./components/ContactoCard";
import "./App.css";
import { useState } from "react";
import { ContactoFormulario } from "./components/ContactoFormulario";

function App() {

  const [contactos, setContactos] = useState([]);

  const AgregarContacto = (nombre, correo, telefono, etiqueta) => {

    const contacto = { nombre: nombre, correo: correo, telefono: telefono, etiqueta: etiqueta };

    setContactos([...contactos, contacto]);

  }

  return (
    <>
    {console.log(contactos)}
      <header className="app-header">
        <h1>Agenda ADSO</h1>
        <p className="app-subtitle">Contactos Guardados</p>
        <Saludo />
      </header>

    <ContactoFormulario
    OnAgregar={AgregarContacto}
    />    
      
    {contactos.map((contacto, index) =>(
      <ContactoCard
      key={index}
      nombre={contacto.nombre}
      correo={contacto.correo}
      telefono={contacto.telefono}
      etiqueta={contactos.etiqueta}
      />
    ))}  
    </>


  );
}

export default App;