import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Overview", path: "/" },
  { name: "Accounts", path: "/accounts" },
  { name: "Renewals", path: "/renewals" },
  { name: "Support", path: "/support" },
  { name: "Analytics", path: "/analytics" },
  { name: "Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-[#27324a] bg-[#0f1728] lg:block">
      <div className="flex h-full flex-col px-6 py-8">
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300 ring-1 ring-teal-300/20">
              <span className="text-lg font-bold">C</span>
            </div>

            <div>
              <h1 className="text-lg font-semibold tracking-tight text-white">
                ClientsOps
              </h1>
              <p className="text-sm text-slate-400">
                Customer Operations Platform
              </p>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#172033] text-white ring-1 ring-[#31405f] shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                    : "text-slate-400 hover:bg-[#141d2f] hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl border border-[#27324a] bg-[#121a2b] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Account Manager
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#24324b] text-sm font-semibold text-white">
              FV
            </div>

            <div>
              <p className="text-sm font-medium text-white">Fran Vargas</p>
              <p className="text-xs text-slate-400">Enterprise Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;