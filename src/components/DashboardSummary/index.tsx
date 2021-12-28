import { TDashboardSummary } from "@/lib/interfaces/generals";
import DashboardSummaryCard from "./DashboardSummaryCard";

const dashboardSummaries: TDashboardSummary[] = [
  {
    title: "Registered members",
    value: 46,
  },
  {
    title: "Completed sessions",
    value: 21,
  },
];

const DashboardSummary = () => {
  return (
    <div>
      <ul className="flex space-x-4">
        {dashboardSummaries.map((s) => (
          <DashboardSummaryCard key={s.title} summary={s} />
        ))}
      </ul>
    </div>
  );
};

export default DashboardSummary;
