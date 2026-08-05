export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar
}) {
  const inicial = nombre ? nombre.charAt(0).toUpperCase() : "?";

  return (
    <div className="card-contacto">
      <div className="card-avatar">{inicial}</div>
      <h3 className="card-nombre">{nombre}</h3>
      <p className="card-telefono">{telefono}</p>
      {etiqueta && /*si etiqueta es true, entonces que renderice el componente */
        (<p className="card-etiqueta">{etiqueta}</p>)}
      <button type="button" className="card-eliminar" onClick={onEliminar}>Eliminar</button>
    </div>
  );
}
