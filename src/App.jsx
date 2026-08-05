import Saludo from "./components/saludo";
import ContactoCard from "./components/ContactoCard";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { ContactoFormulario } from "./components/ContactoFormulario";

function App() {

  const [contactos, setContactos] = useLocalStorage("contactos", []);

  const AgregarContacto = (nombre, correo, telefono, etiqueta) => {

    const contacto = { nombre: nombre, correo: correo, telefono: telefono, etiqueta: etiqueta };

    setContactos([...contactos, contacto]);

  }

  const EliminarContacto = (index) => {

    setContactos(contactos.filter((contacto, i) => i !== index));

  }

  return (
    <>
      <header className="app-header">
        <h1>Agenda ADSO</h1>
        <p className="app-subtitle">Contactos Guardados</p>
        <div className="contador-contactos">
          Tienes <strong>{contactos.length}</strong> {contactos.length === 1 ? "contacto" : "contactos"} guardados
        </div>
        <Saludo />
      </header>

    <ContactoFormulario
    OnAgregar={AgregarContacto}
    />    
      
      <div className="contactos-grid">
        {contactos.map((contacto, index) =>(
          <ContactoCard
          key={index}
          nombre={contacto.nombre}
          correo={contacto.correo}
          telefono={contacto.telefono}
          etiqueta={contacto.etiqueta}
          onEliminar={() => EliminarContacto(index)}
          />
        ))}
      </div>
    </>


  );
}

export default App;