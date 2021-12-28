import Head from "next/head";
import Navbar from "../navbar";
import Sidenav from "../Sidenav";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Knack lab</title>
        <meta name="description" content="Knack lab homepage" />
      </Head>
      <Navbar />
      <div className="flex">
        <Sidenav />
        <main className="bg-gray-50 flex-1 px-6 py-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
