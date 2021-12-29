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
      <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:3xl:grid-cols-4 3xl:grid-cols-5  4xl:grid-cols-6 ">
        {dashboardSummaries.map((s) => (
          <DashboardSummaryCard key={s.title} summary={s} />
        ))}
      </ul>
    </div>
  );
};

export default DashboardSummary;
