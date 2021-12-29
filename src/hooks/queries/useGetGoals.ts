import { GOALS_Q_KEY } from "@/helpers/queryKeys";
import { TDevelopmentGoal } from "@/lib/interfaces/generals";
import { useQuery } from "react-query";

const useGetGoals = () => {
  return useQuery<TDevelopmentGoal[]>(
    GOALS_Q_KEY,
    async () => {
      return new Promise<TDevelopmentGoal[]>((res) => {
        res([
          {
            title: "Improve communication skills",
            createdAt: "17/12/2021",
            description: `If you want to start by developing new and better relationships, remember that it’s OK to make the first move. Everyone’s nervous about talking to people they don’t know. Don’t be afraid to break the ice.`,
            id: 15452,
            tasks: [
              { id: 2282, title: "Task 1", checked: true },
              { id: 1234, title: "Task 2", checked: false },
              { id: 12345, title: "Task 3", checked: false },
              { id: 123456, title: "Task 4", checked: false },
            ],
          },
          {
            title: "Improve work life balance",
            createdAt: "17/12/2021",
            description: `Creating a healthy work life balance is essential to leading a happy and productive lifestyle, it can have positive effects on your wellbeing and even your work. Build realistic boundaries between work and your personal life.`,
            id: 28456,
            tasks: [
              { id: 23, title: "Task 1", checked: true },
              { id: 213, title: "Task 2", checked: false },
            ],
          },
        ]);
      });
    },
    { staleTime: 1000 * 60 * 360 }
  );
};

export default useGetGoals;
