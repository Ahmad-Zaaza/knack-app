import { IApplicationContextProps } from "./interfaces/ApplicationContext";

export const NAVBAR_HEIGHT = "74.41";
export const NAVBAR_HEIGHT_XL = "90.41";
export const INITIAL_STATE: IApplicationContextProps = {
  goals: [
    {
      title: "Improve communication skills",
      createdAt: "17/12/2021",
      description: `If you want to start by developing new and better relationships, remember that it’s OK to make the first move. Everyone’s nervous about talking to people they don’t know. Don’t be afraid to break the ice.`,
      progress: 24,
      id: 1,
      tasks: [],
    },
    {
      title: "Improve work life balance",
      createdAt: "17/12/2021",
      description: `Creating a healthy work life balance is essential to leading a happy and productive lifestyle, it can have positive effects on your wellbeing and even your work. Build realistic boundaries between work and your personal life.`,
      progress: 100,
      id: 2,
      tasks: [],
    },
  ],
  initialTasks: [
    {
      title: "Read Books",
    },

    {
      title: "Evaluate self",
    },
  ],
};
