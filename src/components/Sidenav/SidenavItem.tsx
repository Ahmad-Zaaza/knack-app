import { TSideNavItem } from "@/lib/interfaces/generals";
import Link from "next/link";
interface ISidenavItemProps {
  item: TSideNavItem;
  expanded: boolean;
}

const SidenavItem = ({
  expanded,
  item: { Icon, href, title },
}: ISidenavItemProps) => {
  return (
    <Link href={href}>
      <a
        className={`flex items-center p-4 rounded-lg min-w-fit gap-4 hover:bg-primary hover:bg-opacity-20 hover:text-primary transition-colors duration-150 `}
      >
        <Icon size={25} />
        {expanded && title}
      </a>
    </Link>
  );
};

export default SidenavItem;
