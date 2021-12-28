import type { NextPage } from "next";
import DashboardSummary from "@/components/DashboardSummary";
import DashboardGoals from "@/components/DashboardGoals";
const Home: NextPage = () => {
  return (
    <div className="grid gap-6">
      <h1 className="text-4xl font-bold">Hala Amna !</h1>

      <DashboardSummary />
      <DashboardGoals />
      {/* <Tab.Group manual onChange={(index) => setActiveTab(index)}>
        <Tab.List className="flex space-x-2">
          <Tab>
            {({ selected }) => (
              <Button
                className={`${selected ? "bg-primary text-inverted" : ""}`}
              >
                Goals
              </Button>
            )}
          </Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group> */}
    </div>
  );
};

export default Home;
