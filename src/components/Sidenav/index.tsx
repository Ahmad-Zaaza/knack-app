import { useMemo, useState } from "react";
import clsx from "classnames";
import { RiDashboardFill, RiBarChartFill } from "react-icons/ri";
import SidenavItem from "./SidenavItem";
import { TSideNavItem } from "@/lib/interfaces/generals";
import SidenavExpandButton from "./SidenavExpandButton";

const sidenavItems: TSideNavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    Icon: RiDashboardFill,
  },
  {
    title: "Reports",
    href: "/",
    Icon: RiBarChartFill,
  },
];
const Sidenav = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const containerClasses = useMemo(() => {
    return clsx(
      "border-r relative",
      "transition-all duration-300",
      `h-[calc(100vh_-_74.41px)]`,
      `4xl:h-[calc(100vh_-_94.41px)]`,
      {
        "w-64": expanded,
        "w-20": !expanded,
      }
    );
  }, [expanded]);
  return (
    <aside className={containerClasses}>
      <div className="overflow-hidden p-4">
        {sidenavItems.map((item) => (
          <SidenavItem key={item.title} item={item} expanded={expanded} />
        ))}
      </div>
      <SidenavExpandButton expanded={expanded} setExpanded={setExpanded} />
    </aside>
  );
};

export default Sidenav;
