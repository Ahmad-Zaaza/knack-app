import { Dispatch, SetStateAction } from "react";
import { FiChevronLeft } from "react-icons/fi";
import clsx from "classnames";

interface ISidenavExpandButtonProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const SidenavExpandButton = ({
  collapsed,
  setCollapsed,
}: ISidenavExpandButtonProps) => {
  return (
    <button
      className={`hidden absolute bottom-20 -right-5 shadow-lg hover:shadow-inner hover:bg-slate-200 bg-white rounded-full transition-color duration-150  h-10 w-10 md:flex justify-center items-center`}
      onClick={() => setCollapsed(!collapsed)}
    >
      <FiChevronLeft
        className={`${clsx({
          "rotate-180": collapsed,
        })} transition-transform duration-300`}
        size={24}
      />
    </button>
  );
};

export default SidenavExpandButton;
