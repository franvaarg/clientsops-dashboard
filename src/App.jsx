import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Overview from "./pages/Overview";
import Accounts from "./pages/Accounts";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b1020] text-slate-100">
        <div className="flex min-h-screen">
          <Sidebar />

          <div className="flex-1 lg:ml-72">
            <Topbar />

            <main className="p-4 sm:p-6 lg:p-8 xl:p-10">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/accounts" element={<Accounts />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;