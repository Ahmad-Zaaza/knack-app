import { GOALS_Q_KEY } from "@/helpers/queryKeys";
import { TDevelopmentGoal } from "@/lib/interfaces/generals";
import { INewGoal } from "@/lib/interfaces/NewGoal";
import { useMutation, useQueryClient } from "react-query";
import { format } from "date-fns";
const useCreateGoal = () => {
  const queryClient = useQueryClient();
  return useMutation(async ({ description, tasks, title }: INewGoal) => {
    return new Promise((res) => {
      const goals = queryClient.getQueryData<TDevelopmentGoal[]>(GOALS_Q_KEY);
      if (goals) {
        goals.push({
          createdAt: format(new Date(), "dd/MM/yyyy"),
          description: description,
          id: Math.random(),

          tasks: tasks.map((t) => ({
            ...t,
            checked: false,
          })),
          title: title,
        });      
        queryClient.setQueryData(GOALS_Q_KEY, goals);
        return res(goals);
      }
    });
  });
};

export default useCreateGoal;
