import Button from "../StyledComponents/Button";
import { RiAddFill } from "react-icons/ri";
import DashboardGoalCard from "./DashboardGoalCard";
import Link from "next/link";
import useGetGoals from "@/hooks/queries/useGetGoals";

const DashboardGoals = () => {
  const { data: goals } = useGetGoals();
  return (
    <div>
      <div className="flex justify-between space-x-2 mb-4">
        <h5 className="text-xl 4xl:text-2xl font-semibold ">
          Goals in progress
        </h5>
        <Link href="/new-goal" passHref>
          <Button primary>
            <RiAddFill size={25} />
            Add goals
          </Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {goals?.map((g) => (
          <DashboardGoalCard key={g.id} goal={g} />
        ))}
      </div>
    </div>
  );
};

export default DashboardGoals;
