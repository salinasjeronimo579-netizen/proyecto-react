export default function Card({ children, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-edge bg-gradient-to-br from-card to-card-alt p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-azul/40 hover:bg-card-hover hover:shadow-card-hover ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-azul via-indigoAccent to-morado"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-azul/10 via-indigoAccent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
