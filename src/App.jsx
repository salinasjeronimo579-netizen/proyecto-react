import Saludo from "./components/saludo";
import ContactoCard from "./components/ContactoCard";
import "./App.css";
import useContactosApi from "./hooks/useContactosApi";
import { ContactoFormulario } from "./components/ContactoFormulario";

function App() {

  const { contactos, cargando, error, AgregarContacto, EliminarContacto } = useContactosApi();

  const EliminarContactoId = (id) => {
    EliminarContacto(id);
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

      {cargando && (
        <p className="text-center text-slate-soft">Cargando contactos...</p>
      )}
      {error && (
        <p className="text-center text-red-400">Error: {error}</p>
      )}

      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 py-2 pb-12">
        {contactos.map((contacto) =>(
          <ContactoCard
          key={contacto.id}
          nombre={contacto.nombre}
          correo={contacto.correo}
          telefono={contacto.telefono}
          etiqueta={contacto.etiqueta}
          empresa = {contacto.empresa}
          onEliminar={() => EliminarContactoId(contacto.id)}
          />
        ))}
      </div>

    </>
  );


}

export default App;