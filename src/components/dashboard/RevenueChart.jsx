import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 18000 },
  { month: "Feb", revenue: 22000 },
  { month: "Mar", revenue: 26000 },
  { month: "Apr", revenue: 24000 },
  { month: "May", revenue: 32000 },
  { month: "Jun", revenue: 36000 },
  { month: "Jul", revenue: 41000 },
  { month: "Aug", revenue: 48320 },
];

function RevenueChart() {
  return (
    <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
      <div className="mb-6">
        <h3 className="text-base font-semibold text-white">Revenue trend</h3>
        <p className="mt-1 text-sm text-slate-400">
          Monthly recurring revenue growth over the last 8 months
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5eead4" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#5eead4" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#22304a" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#172033",
                border: "1px solid #31405f",
                borderRadius: "14px",
                color: "#fff",
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#5eead4"
              strokeWidth={3}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;