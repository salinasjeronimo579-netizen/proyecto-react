export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-full border border-azul/30 bg-azul/15 px-3 py-1 text-xs font-semibold tracking-wide text-azul ${className}`}
    >
      {children}
    </span>
  );
}
