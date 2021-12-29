import NewGoalTasks from "@/components/NewGoalTasks";
import Button from "@/components/StyledComponents/Button";
import Input from "@/components/StyledComponents/Input";
import TextArea from "@/components/StyledComponents/Textarea";
import { INewGoal } from "@/lib/interfaces/NewGoal";
import Link from "next/link";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RiAddFill } from "react-icons/ri";

import NewGoalRecommendation from "@/components/NewGoalRecommendation";
import { useRouter } from "next/router";
import useCreateGoal from "@/hooks/mutations/useCreateGoal";
import useGetGoals from "@/hooks/queries/useGetGoals";

const NewGoal = () => {
  const { push } = useRouter();
  const { mutateAsync } = useCreateGoal();
  const formMethods = useForm<INewGoal>({ defaultValues: { tasks: [] } });
  useGetGoals(); // Just for test implementation.
  const onSubmit: SubmitHandler<INewGoal> = async (data) => {
    try {
      await mutateAsync({ ...data });
      push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link href="/" passHref>
        <Button size="small" primary>
          Back to dashboard
        </Button>
      </Link>
      <div className="flex  my-4  justify-between flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row">
        <h1 className="text-4xl font-bold">Add new goal</h1>
        <Button type="submit" form="new-goal" primary>
          <RiAddFill size={25} />
          Create goal
        </Button>
      </div>

      <hr className="my-4" />
      <FormProvider {...formMethods}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            id="new-goal"
            className="flex flex-col space-y-6"
          >
            <div>
              <NewGoalHeadline>Goal objective</NewGoalHeadline>
              <Input
                {...formMethods.register("title", {
                  required: "This field is required",
                })}
                error={formMethods.formState.errors.title?.message}
              />
              <NewGoalRecommendation />
            </div>
            <div>
              <NewGoalHeadline>Goal description</NewGoalHeadline>
              <TextArea {...formMethods.register("description")} rows={4} />
            </div>
          </form>
          <section>
            <NewGoalTasks />
          </section>
        </div>
      </FormProvider>
    </div>
  );
};

export default NewGoal;

export const NewGoalHeadline: React.FC = ({ children }) => {
  return <h6 className="text-xl mb-2 font-bold">{children}</h6>;
};
