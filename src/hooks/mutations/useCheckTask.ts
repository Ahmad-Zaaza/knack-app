import { GOALS_Q_KEY } from "@/helpers/queryKeys";
import { TDevelopmentGoal } from "@/lib/interfaces/generals";
import { useMutation, useQueryClient } from "react-query";

const useCheckTask = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ goalId, taskId }: { taskId: number; goalId: number }) => {
      return new Promise((res) => {
        const goals = queryClient.getQueryData<TDevelopmentGoal[]>(GOALS_Q_KEY);
        if (goals) {
          const currentGoalIndex = goals.findIndex(
            (oldGoal) => oldGoal.id === goalId
          );
          const goal = goals[currentGoalIndex];
          const taskIndex = goal.tasks.findIndex((t) => t.id === taskId);
          const task = goal.tasks[taskIndex];
          task.checked = !task.checked;
          queryClient.setQueryData(GOALS_Q_KEY, goals);
          return res(goals);
        }
      });
    }
  );
};

export default useCheckTask;
