import { INewGoal } from "@/lib/interfaces/NewGoal";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const NewGoalRecommendation = () => {
  const [fields] = useState([
    "Challenge yourself",
    "Work on your weaknesses",
    "Learn a new skill",
  ]);
  const { setValue } = useFormContext<INewGoal>();
  const handleSetObjective = (f: string) => {
    setValue("title", f);
  };
  return (
    <div className="pt-4">
      <p className="text-muted text-sm">
        Need some recommendations? try these out :
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3  3xl:grid-cols-5 gap-2 mt-4">
        {fields.map((f) => (
          <button
            type="button"
            onClick={() => handleSetObjective(f)}
            key={f}
            className="chip bg-orange-500 text-inverted"
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewGoalRecommendation;
