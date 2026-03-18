import { useMemo, useState } from "react";

const accountsData = [
  {
    id: 1,
    company: "NovaCore",
    plan: "Enterprise",
    mrr: 8400,
    health: "Healthy",
    renewal: "Oct 21, 2026",
    tickets: 2,
    manager: "Fran Vargas",
    industry: "Fintech",
    users: 148,
  },
  {
    id: 2,
    company: "BrightStack",
    plan: "Business",
    mrr: 6120,
    health: "At Risk",
    renewal: "Oct 28, 2026",
    tickets: 5,
    manager: "Fran Vargas",
    industry: "SaaS",
    users: 84,
  },
  {
    id: 3,
    company: "FlowLabs",
    plan: "Pro",
    mrr: 4300,
    health: "Healthy",
    renewal: "Nov 03, 2026",
    tickets: 1,
    manager: "Fran Vargas",
    industry: "Marketing",
    users: 52,
  },
  {
    id: 4,
    company: "Vertex AI",
    plan: "Enterprise",
    mrr: 9850,
    health: "Healthy",
    renewal: "Nov 12, 2026",
    tickets: 0,
    manager: "Fran Vargas",
    industry: "AI",
    users: 173,
  },
  {
    id: 5,
    company: "ScaleForge",
    plan: "Business",
    mrr: 5740,
    health: "Critical",
    renewal: "Nov 18, 2026",
    tickets: 7,
    manager: "Fran Vargas",
    industry: "Infrastructure",
    users: 91,
  },
  {
    id: 6,
    company: "BluePeak",
    plan: "Pro",
    mrr: 3260,
    health: "At Risk",
    renewal: "Dec 01, 2026",
    tickets: 3,
    manager: "Fran Vargas",
    industry: "E-commerce",
    users: 39,
  },
  {
    id: 7,
    company: "NorthGrid",
    plan: "Enterprise",
    mrr: 11200,
    health: "Healthy",
    renewal: "Dec 06, 2026",
    tickets: 1,
    manager: "Fran Vargas",
    industry: "Logistics",
    users: 204,
  },
  {
    id: 8,
    company: "CloudHaven",
    plan: "Business",
    mrr: 6890,
    health: "Healthy",
    renewal: "Dec 14, 2026",
    tickets: 2,
    manager: "Fran Vargas",
    industry: "Cloud",
    users: 117,
  },
];

function getHealthClasses(health) {
  if (health === "Healthy") {
    return "bg-emerald-400/10 text-emerald-400";
  }

  if (health === "At Risk") {
    return "bg-amber-400/10 text-amber-400";
  }

  return "bg-rose-400/10 text-rose-400";
}

function getTicketClasses(tickets) {
  if (tickets === 0 || tickets === 1) {
    return "bg-emerald-400/10 text-emerald-400";
  }

  if (tickets <= 3) {
    return "bg-amber-400/10 text-amber-400";
  }

  return "bg-rose-400/10 text-rose-400";
}

function formatCurrency(value) {
  return `$${value.toLocaleString()}`;
}

function Accounts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("All Plans");
  const [selectedHealth, setSelectedHealth] = useState("All Health");

  const filteredAccounts = useMemo(() => {
    return accountsData.filter((account) => {
      const matchesSearch =
        account.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.health.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.industry.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPlan =
        selectedPlan === "All Plans" || account.plan === selectedPlan;

      const matchesHealth =
        selectedHealth === "All Health" || account.health === selectedHealth;

      return matchesSearch && matchesPlan && matchesHealth;
    });
  }, [searchTerm, selectedPlan, selectedHealth]);

  const totalAccounts = filteredAccounts.length;
  const healthyAccounts = filteredAccounts.filter(
    (account) => account.health === "Healthy"
  ).length;
  const atRiskAccounts = filteredAccounts.filter(
    (account) => account.health === "At Risk" || account.health === "Critical"
  ).length;
  const totalTickets = filteredAccounts.reduce(
    (sum, account) => sum + account.tickets,
    0
  );

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold text-teal-300">Accounts</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">
          Customer accounts
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Monitor account health, recurring revenue, renewals and support load across your portfolio.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <p className="text-sm font-medium text-slate-400">Visible Accounts</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {totalAccounts}
          </h3>
          <p className="mt-2 text-sm text-emerald-400">Filtered in real time</p>
        </div>

        <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <p className="text-sm font-medium text-slate-400">Healthy Accounts</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {healthyAccounts}
          </h3>
          <p className="mt-2 text-sm text-emerald-400">Strong portfolio health</p>
        </div>

        <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <p className="text-sm font-medium text-slate-400">At-Risk Accounts</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {atRiskAccounts}
          </h3>
          <p className="mt-2 text-sm text-amber-400">Needs closer attention</p>
        </div>

        <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <p className="text-sm font-medium text-slate-400">Open Tickets</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {totalTickets}
          </h3>
          <p className="mt-2 text-sm text-rose-400">Support workload overview</p>
        </div>
      </div>

      <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
        <div className="flex flex-col gap-4 border-b border-[#27324a] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold text-white">Accounts directory</h2>
            <p className="mt-1 text-sm text-slate-400">
              Search, filter and review customer accounts in one place.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row">
            <input
              type="text"
              placeholder="Search by company, plan, manager, industry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="min-w-[260px] rounded-xl border border-[#31405f] bg-[#0f1728] px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-teal-300"
            />

            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="rounded-xl border border-[#31405f] bg-[#0f1728] px-4 py-3 text-sm text-slate-200 outline-none focus:border-teal-300"
            >
              <option>All Plans</option>
              <option>Enterprise</option>
              <option>Business</option>
              <option>Pro</option>
            </select>

            <select
              value={selectedHealth}
              onChange={(e) => setSelectedHealth(e.target.value)}
              className="rounded-xl border border-[#31405f] bg-[#0f1728] px-4 py-3 text-sm text-slate-200 outline-none focus:border-teal-300"
            >
              <option>All Health</option>
              <option>Healthy</option>
              <option>At Risk</option>
              <option>Critical</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-[#27324a] bg-[#0f1728]/70">
              <tr className="text-xs uppercase tracking-[0.18em] text-slate-500">
                <th className="px-5 py-4 font-medium">Company</th>
                <th className="px-5 py-4 font-medium">Industry</th>
                <th className="px-5 py-4 font-medium">Plan</th>
                <th className="px-5 py-4 font-medium">Users</th>
                <th className="px-5 py-4 font-medium">MRR</th>
                <th className="px-5 py-4 font-medium">Health</th>
                <th className="px-5 py-4 font-medium">Renewal</th>
                <th className="px-5 py-4 font-medium">Tickets</th>
                <th className="px-5 py-4 font-medium">Manager</th>
                <th className="px-5 py-4 font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#27324a]">
              {filteredAccounts.length > 0 ? (
                filteredAccounts.map((account) => (
                  <tr
                    key={account.id}
                    className="transition hover:bg-[#172033]/50"
                  >
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-medium text-white">{account.company}</p>
                        <p className="mt-1 text-sm text-slate-400">
                          Strategic customer account
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-300">
                      {account.industry}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-300">
                      {account.plan}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-300">
                      {account.users}
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-white">
                      {formatCurrency(account.mrr)}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${getHealthClasses(
                          account.health
                        )}`}
                      >
                        {account.health}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-300">
                      {account.renewal}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex min-w-9 items-center justify-center rounded-full px-2.5 py-1 text-xs font-medium ${getTicketClasses(
                          account.tickets
                        )}`}
                      >
                        {account.tickets}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-300">
                      {account.manager}
                    </td>

                    <td className="px-5 py-4">
                      <button className="rounded-lg border border-[#31405f] bg-[#0f1728] px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-[#172033]">
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="10"
                    className="px-5 py-10 text-center text-sm text-slate-400"
                  >
                    No accounts match your current search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Accounts;