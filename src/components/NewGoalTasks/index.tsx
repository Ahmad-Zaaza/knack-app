import { useApplicationState } from "@/contexts/ApplicationContext";
import { TGoalTask } from "@/lib/interfaces/generals";
import { INewGoal } from "@/lib/interfaces/NewGoal";
import { NewGoalHeadline } from "@/pages/new-goal";
import { FormEvent, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RiAddFill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Button from "../StyledComponents/Button";
import Input from "../StyledComponents/Input";

const NewGoalTasks = () => {
  const { watch, setValue, control } = useFormContext<INewGoal>();
  const {
    fieldState: { error },
  } = useController({
    name: "tasks",
    control,
    rules: { required: true },
  });
  const [{ initialTasks }, setState] = useApplicationState();
  const [availableTasks, setAvailableTasks] = useState<TGoalTask[]>(() => {
    return initialTasks;
  });
  const [query, setQuery] = useState("");
  const [showAddInput, setShowAddInput] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  // ➕ Add task to added tasks
  const handleAddTask = (t: TGoalTask) => {
    setAvailableTasks((prev) => prev.filter((oldT) => oldT.title !== t.title));
    setValue("tasks", [...watch("tasks"), t]);
  };
  // ➖ Remove task from added tasks
  const handleRemoveTask = (t: TGoalTask) => {
    setValue(
      "tasks",
      [...watch("tasks")].filter((oldT) => oldT.title !== t.title)
    );
    // setAddedTasks((prev) => prev.filter((oldT) => oldT.title !== t.title));
    setAvailableTasks((prev) => [...prev, t]);
  };
  // 🆕 Create task and add it to available tasks and initial tasks (like saving it to DB)
  const handleCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTaskValue("");
    setShowAddInput(false);
    if (newTaskValue) {
      setState((prev) => ({
        ...prev,
        initialTasks: [...prev.initialTasks, { title: newTaskValue }],
      }));
      setAvailableTasks((prev) => [...prev, { title: newTaskValue }]);
    }
  };
  // 🔎 Filter available tasks based on search query.
  const handleSearchChange = (query: string) => {
    setQuery(query);
  };
  console.log();
  return (
    <div>
      <NewGoalHeadline>Goal tasks</NewGoalHeadline>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="bg-paper rounded border">
          <div className="border-b px-2 py-3">
            <h6 className="text-center font-semibold">Added tasks</h6>
          </div>
          <ul className="p-2 flex flex-col space-y-2 h-[350px] max-h-[350px] overflow-y-auto">
            {watch("tasks").length === 0 && (
              <div className="h-full flex-col space-y-3 flex justify-center items-center">
                <p>No Tasks added</p>
                {error && (
                  <p className="text-red-500 text-sm">Please add atleast one task</p>
                )}
              </div>
            )}
            {watch("tasks").map((t) => (
              <li
                onClick={() => handleRemoveTask(t)}
                key={t.title}
                className="flex bg-blue-300 bg-opacity-20 space-x-3 h-[50px] items-center transition-colors duration-75  hover:bg-opacity-40 p-3 rounded cursor-pointer"
              >
                <p>{t.title}</p>
                <RiArrowRightSLine size={20} className="text-red-500" />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-paper relative rounded border">
          <div className="border-b px-2 py-3">
            <h6 className="text-center font-semibold">Available tasks</h6>
          </div>
          <div className="p-2  h-[350px] overflow-hidden">
            <Input
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search for a task..."
            />
            <ul className="py-2  flex flex-col space-y-2 h-64 max-h-64 overflow-y-auto">
              {availableTasks
                .filter((t) => t.title.toLowerCase().indexOf(query) !== -1)
                .map((t) => (
                  <li
                    onClick={() => handleAddTask(t)}
                    key={t.title}
                    className="flex space-x-3 h-[50px] items-center hover:bg-primary transition-colors duration-75 hover:bg-opacity-10 p-3 rounded cursor-pointer"
                  >
                    <RiArrowLeftSLine size={20} className="text-green-500" />
                    <p>{t.title}</p>
                  </li>
                ))}
            </ul>
            <div
              role="button"
              key="add"
              className={`bg-green-200 ${
                showAddInput
                  ? "h-[100px] !bg-green-300"
                  : "h-[48px] hover:bg-green-300"
              } sticky bottom-0 z-10  items-center  font-semibold  transition-all duration-200 p-3 rounded cursor-pointer`}
            >
              <button
                onClick={() => {
                  setShowAddInput(!showAddInput);
                }}
                className="flex items-center space-x-2 w-full"
              >
                <RiAddFill
                  size={25}
                  className={`${
                    showAddInput ? "text-red-500 rotate-45" : "text-green-500"
                  } transition-transform duration-200 `}
                />

                <p>Create new task</p>
              </button>
              {showAddInput && (
                <form
                  onSubmit={handleCreateTask}
                  className="mt-4 space-x-2 flex"
                >
                  <Input
                    value={newTaskValue}
                    onChange={(e) => setNewTaskValue(e.target.value)}
                    variant="small"
                    placeholder="eg: Read a book..."
                  />
                  <Button size="small" className="border-primary border">
                    Add
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGoalTasks;
