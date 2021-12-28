import { TDevelopmentGoal } from "@/lib/interfaces/generals";
import { RiCalendarLine, RiEdit2Fill } from "react-icons/ri";
import clsx from "classnames";
import Button from "../StyledComponents/Button";
import { useState } from "react";
import EditProgress from "./EditProgress";
interface IDashboardGoalCardProps {
  goal: TDevelopmentGoal;
}
const DashboardGoalCard = ({ goal }: IDashboardGoalCardProps) => {
  const [editProgress, setEditProgress] = useState(false);
  return (
    <div className={`${clsx({ "min-h-[250px]": editProgress })}   g-card`}>
      <div className="flex-1">
        <h6 className="font-medium mb-1">{goal.title}</h6>
        <p className="text-sm text-muted line-clamp-2">{goal.description}</p>
        <div className="flex space-x-1 my-2 items-center">
          <div className="prog-linear ">
            <div
              style={{ width: `${goal.progress}%` }}
              className={`h-full bg-green-400 transition-all duration-75 text-xs text-inverted text-right`}
            ></div>
          </div>
          {goal.progress !== 0 && (
            <p className="text-sm text-muted">{goal.progress}%</p>
          )}
          <button
            onClick={() => setEditProgress(!editProgress)}
            className="rounded-lg text-muted hover:text-primary hover:bg-slate-200 p-2 transition-color duration-75"
          >
            <RiEdit2Fill size={20} />
          </button>
        </div>
        {editProgress ? <EditProgress /> : null}
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <div className="text-muted flex space-x-1">
          <RiCalendarLine />
          <p className="text-xs">{goal.createdAt}</p>
        </div>
        <div className=" flex space-x-1">
          <Button primary size="small">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardGoalCard;
