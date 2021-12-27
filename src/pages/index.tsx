import Button from "@/components/StyledComponents/Button";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-red-400">Hello World</h1>
      <Button primary >Create new Goal</Button>
    </>
  );
};

export default Home;
