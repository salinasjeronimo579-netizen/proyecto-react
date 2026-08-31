import Input from "./ui/Input";
import Button from "./ui/Button";

export function ContactoBuscador({ busqueda, setBusqueda, ordenAsc, setOrdenAsc, cantidadResultados }) {
  return (
    <div className="mx-auto mb-6 flex w-full max-w-[900px] flex-wrap items-center gap-3.5 rounded-2xl border border-indigoAccent/25 bg-gradient-to-br from-[#20264d] via-[#191d3a] to-[#12162e] p-5 shadow-[0_10px_30px_rgba(129,140,248,0.15)]">
      <div className="min-w-[220px] flex-1">
        <Input
          type="text"
          placeholder="Buscar por nombre, correo, teléfono o etiqueta..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <Button
        type="button"
        className="min-w-[150px]"
        onClick={() => setOrdenAsc((prev) => !prev)}
      >
        {ordenAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
      </Button>
      <p className="resultados-contador resultados-contador--buscador">
        {cantidadResultados} {cantidadResultados === 1 ? "contacto encontrado" : "contactos encontrados"}
      </p>
    </div>
  );
}
