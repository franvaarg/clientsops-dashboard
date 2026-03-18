const accounts = [
  { company: "NovaCore", plan: "Enterprise", mrr: "$8,400", health: "Healthy" },
  { company: "BrightStack", plan: "Business", mrr: "$6,120", health: "At Risk" },
  { company: "FlowLabs", plan: "Pro", mrr: "$4,300", health: "Healthy" },
  { company: "Vertex AI", plan: "Enterprise", mrr: "$9,850", health: "Healthy" },
];

function AccountsList() {
  return (
    <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
      <div className="border-b border-[#27324a] px-5 py-4">
        <h3 className="text-base font-semibold text-white">Top accounts</h3>
        <p className="mt-1 text-sm text-slate-400">
          Highest-value customers this month
        </p>
      </div>

      <div className="divide-y divide-[#27324a]">
        {accounts.map((account) => (
          <div
            key={account.company}
            className="flex items-center justify-between gap-4 px-5 py-4"
          >
            <div>
              <p className="font-medium text-white">{account.company}</p>
              <p className="text-sm text-slate-400">{account.plan}</p>
            </div>

            <div className="text-right">
              <p className="font-medium text-white">{account.mrr}</p>
              <p
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                  account.health === "Healthy"
                    ? "bg-emerald-400/10 text-emerald-400"
                    : "bg-amber-400/10 text-amber-400"
                }`}
              >
                {account.health}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountsList;