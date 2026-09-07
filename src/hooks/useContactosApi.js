import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const API = "https://randomuser.me/api/?results=20";

const mapearUsuarioApi = (usuario) => ({
  id: usuario.login.uuid,
  nombre: `${usuario.name.first} ${usuario.name.last}`,
  correo: usuario.email,
  telefono: usuario.phone,
  etiqueta: usuario.location?.country || "",
  empresa: "",
  imagen: usuario.picture?.large || "",
});

function useContactosApi() {
  const [contactosApi, setContactosApi] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [contactosLocales, setContactosLocales] = useLocalStorage("agenda-contactos-locales", []);
  const [idsEliminados, setIdsEliminados] = useLocalStorage("agenda-contactos-eliminados", []);

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los contactos");
        return res.json();
      })
      .then((data) => setContactosApi(data.results.map(mapearUsuarioApi)))
      .catch((error) => setError(error.message))
      .finally(() => setCargando(false));
  }, []);

  const contactos = [...contactosApi, ...contactosLocales].filter(
    (contacto) => !idsEliminados.includes(contacto.id)
  );

  const AgregarContacto = (nombre, correo, telefono, etiqueta, empresa, imagen) => {
    const nuevoContacto = {
      id: crypto.randomUUID(),
      nombre,
      correo,
      telefono,
      etiqueta,
      empresa,
      imagen,
    };
    setContactosLocales([...contactosLocales, nuevoContacto]);
  };

  const EliminarContacto = (id) => {
    setIdsEliminados([...idsEliminados, id]);
    setContactosLocales(contactosLocales.filter((contacto) => contacto.id !== id));
  };

  return { contactos, cargando, error, AgregarContacto, EliminarContacto };
}

export default useContactosApi;
