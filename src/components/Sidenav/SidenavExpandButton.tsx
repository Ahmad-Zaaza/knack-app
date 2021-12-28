import { Dispatch, SetStateAction } from "react";
import { FiChevronLeft } from "react-icons/fi";
import clsx from "classnames";

interface ISidenavExpandButtonProps {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const SidenavExpandButton = ({
  expanded,
  setExpanded,
}: ISidenavExpandButtonProps) => {
  return (
    <button
      className={`absolute bottom-20 -right-5 shadow-lg hover:shadow-inner hover:bg-slate-200 bg-white rounded-full transition-color duration-150  h-10 w-10 flex justify-center items-center`}
      onClick={() => setExpanded(!expanded)}
    >
      <FiChevronLeft
        className={`${clsx({
          "rotate-180": !expanded,
        })} transition-transform duration-300`}
        size={24}
      />
    </button>
  );
};

export default SidenavExpandButton;
