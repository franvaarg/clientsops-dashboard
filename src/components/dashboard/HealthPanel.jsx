const healthData = [
  { label: "Healthy", value: "68%", bar: "w-[68%]", color: "bg-emerald-400" },
  { label: "At Risk", value: "21%", bar: "w-[21%]", color: "bg-amber-400" },
  { label: "Critical", value: "11%", bar: "w-[11%]", color: "bg-rose-400" },
];

function HealthPanel() {
  return (
    <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
      <div className="border-b border-[#27324a] px-5 py-4">
        <h3 className="text-base font-semibold text-white">Customer health</h3>
        <p className="mt-1 text-sm text-slate-400">
          Account health distribution across the portfolio
        </p>
      </div>

      <div className="space-y-5 px-5 py-5">
        {healthData.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-300">{item.label}</span>
              <span className="font-medium text-white">{item.value}</span>
            </div>
            <div className="h-2.5 rounded-full bg-[#0b1020]">
              <div className={`h-2.5 rounded-full ${item.color} ${item.bar}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthPanel;