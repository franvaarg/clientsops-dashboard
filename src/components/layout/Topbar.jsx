import { useLocation } from "react-router-dom";

const pageContent = {
  "/": {
    label: "Overview",
    title: "Client operations overview",
    description:
      "Monitor customer health, renewals, revenue and support activity in one place.",
  },
  "/accounts": {
    label: "Accounts",
    title: "Customer accounts",
    description:
      "Search, review and manage account health, renewals and support load.",
  },
};

function Topbar() {
  const location = useLocation();
  const currentPage = pageContent[location.pathname] || pageContent["/"];

  return (
    <header className="sticky top-0 z-20 border-b border-[#27324a] bg-[#0b1020]/85 backdrop-blur-xl">
      <div className="flex flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-teal-300">
            {currentPage.label}
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            {currentPage.title}
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            {currentPage.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Search accounts..."
            className="w-full rounded-xl border border-[#31405f] bg-[#121a2b] px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-teal-300 sm:w-64"
          />

          <button className="rounded-xl border border-[#31405f] bg-[#121a2b] px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-[#172033]">
            Last 30 days
          </button>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#31405f] bg-[#121a2b] text-sm font-semibold text-white">
            FV
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;