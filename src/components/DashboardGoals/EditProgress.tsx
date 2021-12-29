import { TGoalTask } from "@/lib/interfaces/generals";
import Checkbox from "../StyledComponents/Checkbox";

interface IEditProgressProps {
  tasks: Array<{ checked: boolean } & TGoalTask>;
  handleCheckTask: (_: number) => void;
}

const EditProgress = ({ tasks, handleCheckTask }: IEditProgressProps) => {
  return (
    <div className="my-1">
      <div className="flex">
        <p className="font-semibold">Edit progress</p>
        <input type="text" />
      </div>
      <ul className="p-2 flex flex-col space-y-2  max-h-[350px] overflow-y-auto">
        {tasks.length === 0 && (
          <div className="h-full flex-col space-y-3 flex justify-center items-center">
            <p>No Tasks added</p>
          </div>
        )}
        {tasks.map((t) => (
          <li
            key={t.id}
            className={`flex ${
              t.checked ? "bg-green-300" : "bg-blue-300"
            } bg-opacity-20 space-x-3 h-[50px] items-center transition-colors duration-75  hover:bg-opacity-40 p-3 rounded`}
          >
            <Checkbox
              checked={t.checked}
              onChange={() => handleCheckTask(t.id)}
              label={t.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditProgress;
