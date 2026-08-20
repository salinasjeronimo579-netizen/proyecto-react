import { useEffect, useState } from "react";

const API = "http://localhost:3001/contactos";

function useContactosApi() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los contactos");
        return res.json();
      })
      .then((data) => setContactos(data))
      .catch((error) => setError(error.message))
      .finally(() => setCargando(false));
  }, []);

  const AgregarContacto = (nombre, correo, telefono, etiqueta, empresa) => {
    return fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, telefono, etiqueta, empresa }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al agregar el contacto");
        return res.json();
      })
      .then((nuevoContacto) => {
        setContactos((prev) => [...prev, nuevoContacto]);
      })
      .catch((error) => {
        console.error("Error al agregar contacto:", error);
        setError(error.message);
      });
  };

  const EliminarContacto = (id) => {
    return fetch(`${API}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar el contacto");
        setContactos((prev) => prev.filter((contacto) => contacto.id !== id));
      })
      .catch((error) => {
        console.error("Error al eliminar contacto:", error);
        setError(error.message);
      });
  };

  return { contactos, cargando, error, AgregarContacto, EliminarContacto };
}

export default useContactosApi;
