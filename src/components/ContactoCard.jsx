import { useState } from "react";
import Card from "./ui/Card";
import Avatar from "./ui/Avatar";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar,
  empresa,
  imagen
}) {
  const [imagenError, setImagenError] = useState(false);
  const inicial = nombre ? nombre.charAt(0).toUpperCase() : "?";
  const mostrarImagen = imagen && !imagenError;

  return (
    <Card>
      {mostrarImagen ? (
        <img
          src={imagen}
          alt={nombre}
          onError={() => setImagenError(true)}
          className="mb-4 h-[52px] w-[52px] rounded-full object-cover shadow-avatar"
        />
      ) : (
        <Avatar>{inicial}</Avatar>
      )}
      <h3 className="text-xl font-bold text-slate-100">{nombre}</h3>

      <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-soft">
        📞 {telefono}
      </p>
      {correo && (
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-soft">
          ✉️ {correo}
        </p>
      )}

      {etiqueta && <div className="mt-3"><Badge>{etiqueta}</Badge></div>}

      {empresa && (
        <div className="mt-3 flex items-center gap-2.5 rounded-lg border border-indigoAccent/25 bg-indigoAccent/10 px-3 py-2">
          <span className="text-base leading-none">🏢</span>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-soft/70">
              Empresa
            </p>
            <p className="text-sm font-semibold text-indigoAccent">{empresa}</p>
          </div>
        </div>
      )}

      <Button variant="danger" type="button" className="mt-4" onClick={onEliminar}>
        Eliminar
      </Button>
    </Card>
  );
}
