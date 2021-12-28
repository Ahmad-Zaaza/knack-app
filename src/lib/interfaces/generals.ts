import { IconType } from "react-icons";

export type TSideNavItem = {
  title: string;
  href: string;
  Icon: IconType;
};
export type TDashboardSummary = {
  title: string;
  value: number;
};

export type TDevelopmentGoal = {
  title: string;
  description: string;
  createdAt: string;
  id: number;
  progress: number;
  tasks: Array<{ checked: boolean } & TGoalTask>;
};
export type TGoalTask = {
  title: string;
};
