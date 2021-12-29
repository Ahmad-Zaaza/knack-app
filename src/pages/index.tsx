import type { NextPage } from "next";
import DashboardSummary from "@/components/DashboardSummary";
import DashboardGoals from "@/components/DashboardGoals";
const Home: NextPage = () => {
  return (
    <div className="grid gap-6">
      <h1 className="text-4xl font-bold">Hala Ahmad !</h1>
      <DashboardSummary />
      <DashboardGoals />
    </div>
  );
};

export default Home;
