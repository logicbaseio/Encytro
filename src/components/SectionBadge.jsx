export const SectionBadge = ({ text, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    gold: "bg-amber-100 text-amber-700 border-amber-200",
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    dark: "bg-slate-800 text-slate-200 border-slate-700"
  };

  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${colorClasses[color]} mb-6`}>
      {text}
    </span>
  );
};
