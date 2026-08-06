export default function Input({ error = false, className = "", ...props }) {
  return (
    <input
      className={`rounded-lg border border-white/15 bg-indigoAccent/10 px-4 py-3 font-[inherit] text-sm text-slate-100 placeholder:text-slate-400 transition-all duration-200 hover:border-white/25 focus:border-indigoAccent focus:bg-indigoAccent/20 focus:outline-none focus:ring-[3px] focus:ring-indigoAccent/30 ${
        error ? "border-red-400 ring-[3px] ring-red-400/20" : ""
      } ${className}`}
      {...props}
    />
  );
}
