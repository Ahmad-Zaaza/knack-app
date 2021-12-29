import { TDevelopmentGoal } from "@/lib/interfaces/generals";
import { RiCalendarLine, RiEdit2Fill } from "react-icons/ri";
import clsx from "classnames";
import Button from "../StyledComponents/Button";
import { useCallback, useState } from "react";
import EditProgress from "./EditProgress";
import useCheckTask from "@/hooks/mutations/useCheckTask";
interface IDashboardGoalCardProps {
  goal: TDevelopmentGoal;
}
const DashboardGoalCard = ({ goal }: IDashboardGoalCardProps) => {
  const [editProgress, setEditProgress] = useState(false);
  const { mutateAsync } = useCheckTask();
  const goalProgress = useCallback(() => {
    let finishedTasks = 0;
    goal.tasks.forEach((t) => {
      if (t.checked) finishedTasks++;
    });
    if (!finishedTasks) return 0;
    return Math.floor((finishedTasks / goal.tasks.length) * 100);
  }, [goal]);

  const handleCheckTask = async (taskId: number) => {
    try {
      await mutateAsync({ goalId: goal.id, taskId });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${clsx({ "min-h-[250px]": editProgress })}   g-card`}>
      <div className="flex-1">
        <h6 className="font-semibold mb-1">{goal.title}</h6>
        <p className="text-sm h-[40px] text-muted line-clamp-2">
          {goal.description ? goal.description : "No description available."}
        </p>
        <div className="flex space-x-1 my-2 items-center">
          <div className="prog-linear ">
            <span
              style={{ width: `${goalProgress()}%` }}
              className={`h-full block bg-green-400 transition-all duration-300 text-xs text-inverted text-right`}
            />
          </div>
          {goalProgress() !== 0 && (
            <p className="text-sm text-muted">{goalProgress()}%</p>
          )}
          <button
            onClick={() => setEditProgress(!editProgress)}
            className="rounded-lg text-muted hover:text-primary hover:bg-slate-200 p-2 transition-color duration-75"
          >
            <RiEdit2Fill size={20} />
          </button>
        </div>
        {editProgress ? (
          <EditProgress tasks={goal.tasks} handleCheckTask={handleCheckTask} />
        ) : null}
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <div className="text-muted flex space-x-1">
          <RiCalendarLine />
          <p className="text-xs">{goal.createdAt}</p>
        </div>
        <div className=" flex space-x-1">
          <Button  onClick={() => setEditProgress(!editProgress)} primary size="small">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardGoalCard;
