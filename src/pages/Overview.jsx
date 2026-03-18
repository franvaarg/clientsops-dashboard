import StatCard from "../components/dashboard/StatCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import AccountsList from "../components/dashboard/AccountsList";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import HealthPanel from "../components/dashboard/HealthPanel";

function Overview() {
  return (
    <section className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Monthly Recurring Revenue"
          value="$48,320"
          change="+8.2%"
          tone="default"
        />
        <StatCard
          title="Active Accounts"
          value="124"
          change="+12.4%"
          tone="success"
        />
        <StatCard
          title="Churn Risk Accounts"
          value="18"
          change="-3.1%"
          tone="warning"
        />
        <StatCard
          title="Renewals This Month"
          value="14"
          change="+4.8%"
          tone="danger"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <RevenueChart />
        <HealthPanel />
      </div>

      <AccountsList />

      <ActivityFeed />
    </section>
  );
}

export default Overview;