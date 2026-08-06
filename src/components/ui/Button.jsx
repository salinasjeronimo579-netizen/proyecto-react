const variants = {
  primary:
    "border border-white/15 bg-gradient-to-r from-azul via-indigoAccent to-morado px-8 py-3 text-base font-bold tracking-wide text-white shadow-[0_4px_16px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 hover:border-azul/60 hover:from-azul hover:via-indigoAccent hover:to-morado hover:shadow-button-hover focus:outline-none focus:ring-[3px] focus:ring-indigoAccent/40 active:translate-y-0 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale disabled:shadow-none",
  danger:
    "border border-red-400/40 bg-red-400/10 px-5 py-2 text-sm font-semibold tracking-wide text-red-400 hover:-translate-y-0.5 hover:bg-red-400 hover:text-white active:translate-y-0",
};

export default function Button({ variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`rounded-xl transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
