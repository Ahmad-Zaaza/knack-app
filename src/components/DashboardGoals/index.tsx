import { TDevelopmentGoal } from "@/lib/interfaces/generals";
import Button from "../StyledComponents/Button";
import { RiAddFill } from "react-icons/ri";
import DashboardGoalCard from "./DashboardGoalCard";

export const developmentGoals: TDevelopmentGoal[] = [
  {
    title: "Improve communication skills",
    createdAt: "17/12/2021",
    description: `If you want to start by developing new and better relationships,
    remember that it’s OK to make the first move. Everyone’s nervous about
    talking to people they don’t know. Don’t be afraid to break the ice.`,
    progress: 24,
    id: 1,
  },
  {
    title: "Improve work life balance",
    createdAt: "17/12/2021",
    description: `Creating a healthy work life balance is essential to leading a happy and productive lifestyle, it can have positive effects on your wellbeing and even your work. Build realistic boundaries between work and your personal life.`,
    progress: 100,
    id: 2,
  },
];

const DashboardGoals = () => {
  return (
    <div>
      <div className="flex justify-between space-x-2 mb-4">
        <h5 className="text-xl 4xl:text-2xl font-semibold ">
          Goals in progress
        </h5>
        <Button primary>
          <RiAddFill size={25} />
          Add goals
        </Button>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {developmentGoals.map((g) => (
          <DashboardGoalCard key={g.id} goal={g} />
        ))}
      </div>
    </div>
  );
};

export default DashboardGoals;
