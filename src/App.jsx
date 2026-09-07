import Saludo from "./components/saludo";
import ContactoCard from "./components/ContactoCard";
import "./App.css";
import useContactosApi from "./hooks/useContactosApi";
import { ContactoFormulario } from "./components/ContactoFormulario";
import { ContactoBuscador } from "./components/ContactoBuscador";
import { useState, useEffect } from "react";
import { ContactoPaginacion } from "./components/ContactoPaginacion";

function App() {

  const { contactos, cargando, error, AgregarContacto, EliminarContacto } = useContactosApi();

  const [busqueda, setBusqueda] = useState("");
  const [ordenAsc, setOrdenAsc] = useState(true);
  const CONTACTOS_POR_PAGINA = 6;
  const [paginaActual, setPaginaActual] = useState(1);

  const contactosFiltrados = contactos.filter((c) => {
    const termino = busqueda.toLowerCase();
    const nombre = (c.nombre || "").toLowerCase();
    const correo = (c.correo || "").toLowerCase();
    const telefono = (c.telefono || "").toLowerCase();
    const etiqueta = (c.etiqueta || "").toLowerCase();
    return (
      nombre.includes(termino) ||
      correo.includes(termino) ||
      telefono.includes(termino) ||
      etiqueta.includes(termino)
    );
  });

  const contactosOrdenados = [...contactosFiltrados].sort((a, b) => {
    const nombreA = (a.nombre || "").toLowerCase();
    const nombreB = (b.nombre || "").toLowerCase();
    if (nombreA < nombreB) return ordenAsc ? -1 : 1;
    if (nombreA > nombreB) return ordenAsc ? 1 : -1;
    return 0;
  });

  const EliminarContactoId = (id) => {
    EliminarContacto(id);
  }

  const totalPaginas = Math.max(1, Math.ceil(contactosOrdenados.length / CONTACTOS_POR_PAGINA));

  const contactosPaginados = contactosOrdenados.slice(
    (paginaActual - 1) * CONTACTOS_POR_PAGINA,
    paginaActual * CONTACTOS_POR_PAGINA
  );

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, ordenAsc]);

  useEffect(() => {
    if (paginaActual > totalPaginas) setPaginaActual(totalPaginas);
  }, [totalPaginas, paginaActual]);

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

      <ContactoBuscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        ordenAsc={ordenAsc}
        setOrdenAsc={setOrdenAsc}
        cantidadResultados={contactosOrdenados.length}
      />

      {cargando && (
        <p className="text-center text-slate-soft">Cargando contactos...</p>
      )}
      {error && (
        <p className="text-center text-red-400">Error: {error}</p>
      )}

      {!cargando && contactosOrdenados.length === 0 ? (
        <p className="text-center text-slate-soft">
          No se encontraron contactos que coincidan con la búsqueda.
        </p>
      ) : (
        <>
          <div className="mx-auto grid w-full max-w-[1100px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 py-2 pb-12">
            {contactosPaginados.map((contacto) => (
              <ContactoCard
                key={contacto.id}
                nombre={contacto.nombre}
                correo={contacto.correo}
                telefono={contacto.telefono}
                etiqueta={contacto.etiqueta}
                empresa={contacto.empresa}
                imagen={contacto.imagen}
                onEliminar={() => EliminarContactoId(contacto.id)}
              />
            ))}
          </div>

          <ContactoPaginacion
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            onCambiarPagina={setPaginaActual}
          />
        </>
      )}
    </>
  );
}

export default App;
