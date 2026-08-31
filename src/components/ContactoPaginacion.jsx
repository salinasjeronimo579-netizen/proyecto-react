export function ContactoPaginacion({ paginaActual, totalPaginas, onCambiarPagina }) {
  if (totalPaginas <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      <button
        type="button"
        onClick={() => onCambiarPagina(paginaActual - 1)}
        disabled={paginaActual === 1}
        className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 disabled:opacity-40"
      >
        Anterior
      </button>

      {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numero) => (
        <button
          key={numero}
          type="button"
          onClick={() => onCambiarPagina(numero)}
          className={`rounded-lg px-3 py-1.5 text-sm ${
            numero === paginaActual
              ? "bg-amber-500 text-slate-900 font-semibold"
              : "border border-slate-700 text-slate-200"
          }`}
        >
          {numero}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onCambiarPagina(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
        className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 disabled:opacity-40"
      >
        Siguiente
      </button>
    </div>
  );
}