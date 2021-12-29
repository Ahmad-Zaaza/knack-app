import { TSideNavItem } from "@/lib/interfaces/generals";
import Link from "next/link";
import { useRouter } from "next/router";
interface ISidenavItemProps {
  item: TSideNavItem;
  collapsed: boolean;
}

const SidenavItem = ({
  collapsed,
  item: { Icon, href, title },
}: ISidenavItemProps) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a
        className={`${
          pathname === href ? "bg-primary bg-opacity-20 text-primary" : ""
        } flex items-center p-4 rounded-lg min-w-fit gap-4 hover:bg-primary hover:bg-opacity-20 hover:text-primary transition-colors duration-150 `}
      >
        <Icon size={25} />
        {!collapsed && title}
      </a>
    </Link>
  );
};

export default SidenavItem;
