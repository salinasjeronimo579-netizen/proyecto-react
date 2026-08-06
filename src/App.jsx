import Saludo from "./components/saludo";
import ContactoCard from "./components/ContactoCard";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { ContactoFormulario } from "./components/ContactoFormulario";

function App() {

  const [contactos, setContactos] = useLocalStorage("contactos", []);

  const AgregarContacto = (nombre, correo, telefono, etiqueta, empresa) => {

    const contacto = { nombre: nombre, correo: correo, telefono: telefono, etiqueta: etiqueta, empresa:empresa };

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
      
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 py-2 pb-12">
        {contactos.map((contacto, index) =>(
          <ContactoCard
          key={index}
          nombre={contacto.nombre}
          correo={contacto.correo}
          telefono={contacto.telefono}
          etiqueta={contacto.etiqueta}
          empresa = {contacto.empresa}
          onEliminar={() => EliminarContacto(index)}
          />
        ))}
      </div>

    </>
  );


}

export default App;