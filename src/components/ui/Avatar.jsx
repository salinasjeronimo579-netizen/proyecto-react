export default function Avatar({ children, className = "" }) {
  return (
    <div
      className={`mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-azul to-indigoAccent text-lg font-bold text-white shadow-avatar ${className}`}
    >
      {children}
    </div>
  );
}
