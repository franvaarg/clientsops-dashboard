function StatCard({ title, value, change, tone = "default" }) {
  const toneClasses = {
    default: "text-teal-300 bg-teal-400/10 ring-teal-300/20",
    success: "text-emerald-400 bg-emerald-500/10 ring-emerald-400/20",
    warning: "text-amber-400 bg-amber-500/10 ring-amber-400/20",
    danger: "text-rose-400 bg-rose-500/10 ring-rose-400/20",
  };

  return (
    <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {value}
          </h3>
        </div>

        <div className={`rounded-xl px-3 py-1 text-xs font-semibold ring-1 ${toneClasses[tone]}`}>
          {change}
        </div>
      </div>
    </div>
  );
}

export default StatCard;