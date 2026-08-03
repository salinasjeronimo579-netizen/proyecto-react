export default function ContactoCard({
  nombre,
  apellido,
  telefono,
  etiqueta,
}) {
  const inicial = nombre ? nombre.charAt(0).toUpperCase() : "?";

  return (
    <div className="card-contacto">
      <div className="card-avatar">{inicial}</div>
      <h3 className="card-nombre">{nombre}</h3>
      <h3 className="card-apellido">{apellido}</h3>
      <p className="card-telefono">{telefono}</p>

      {etiqueta && /*si etiqueta es true, entonces que renderice el componente */
        (<p className="card-etiqueta">{etiqueta}</p>)}
    </div>
  );
}