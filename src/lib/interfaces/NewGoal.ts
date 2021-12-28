import { TGoalTask } from "./generals";

export interface INewGoal {
  title: string;
  description: string;
  tasks: TGoalTask[];
}
