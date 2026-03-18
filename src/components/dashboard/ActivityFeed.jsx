const activities = [
  "NovaCore upgraded to Enterprise plan.",
  "BrightStack opened 3 new priority tickets.",
  "FlowLabs reached 1,200 weekly active users.",
  "Vertex AI renewed annual billing.",
  "ScaleForge added 4 new seats to its account.",
];

function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-[#27324a] bg-[#121a2b] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
      <div className="border-b border-[#27324a] px-5 py-4">
        <h3 className="text-base font-semibold text-white">Recent activity</h3>
        <p className="mt-1 text-sm text-slate-400">
          Latest account and support updates
        </p>
      </div>

      <div className="space-y-4 px-5 py-5">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-3">
            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-teal-300"></div>
            <p className="text-sm leading-6 text-slate-300">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;