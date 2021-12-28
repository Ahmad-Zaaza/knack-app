import { TDevelopmentGoal, TGoalTask } from "./generals";

export interface IApplicationContextProps {
  goals: TDevelopmentGoal[];
  initialTasks: TGoalTask[];
}
