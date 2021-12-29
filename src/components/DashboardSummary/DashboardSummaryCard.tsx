import { TDashboardSummary } from "@/lib/interfaces/generals";

interface IDashboardSummaryCardProps {
  summary: TDashboardSummary;
}

const DashboardSummaryCard = ({ summary }: IDashboardSummaryCardProps) => {
  return (
    <div className="d-card">
      <h1 className="text-inverted font-bold text-xl md:text-2xl">{summary.value}</h1>
      <h1 className="text-inverted text-lg md:text-xl">{summary.title}</h1>
    </div>
  );
};

export default DashboardSummaryCard;
