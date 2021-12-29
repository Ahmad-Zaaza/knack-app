import { useMemo, useState } from "react";
import clsx from "classnames";
import { RiDashboardFill } from "react-icons/ri";
import SidenavItem from "./SidenavItem";
import { TSideNavItem } from "@/lib/interfaces/generals";
import SidenavExpandButton from "./SidenavExpandButton";
import { useApplicationState } from "@/contexts/ApplicationContext";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const sidenavItems: TSideNavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    Icon: RiDashboardFill,
  },
  // {
  //   title: "Reports",
  //   href: "/reports",
  //   Icon: RiBarChartFill,
  // },
];
const Sidenav = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [{ sideNavOpen }] = useApplicationState();
  const containerClasses = useMemo(() => {
    return clsx(
      "transition-all md:translate-x-0 duration-200 will-change-transform fixed md:static top-0 bottom-0 paper z-10",
      {
        "w-64": !collapsed,
        "w-[5.5rem]": collapsed,
        "-translate-x-full": !sideNavOpen,
      }
    );
  }, [collapsed, sideNavOpen]);
  return (
    <aside className={containerClasses}>
      <div className=" block md:hidden p-4">
        <Link href="/">
          <a className="max-h-[50px]">
            <Image src={logo} layout="intrinsic" alt="Knack logo" />
          </a>
        </Link>
      </div>
      <hr className="block md:hidden" />

      <div className="relative h-[calc(100vh_-_74.41px)] 4xl:h-[calc(100vh_-_94.41px)] border-r">
        <div className="overflow-hidden space-y-2 p-4">
          {sidenavItems.map((item) => (
            <SidenavItem key={item.title} item={item} collapsed={collapsed} />
          ))}
        </div>
        <SidenavExpandButton
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      </div>
    </aside>
  );
};

export default Sidenav;
