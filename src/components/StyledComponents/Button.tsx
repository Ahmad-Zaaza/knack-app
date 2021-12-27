import { ComponentPropsWithoutRef, forwardRef, useMemo } from "react";
import clsx from "classnames";
interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  primary?: boolean;
  size?: "small" | "medium" | "large";
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, primary, size, ...props }, ref) => {
    const buttonClasses = useMemo(() => {
      return clsx(
        "btn",
        { "bg-primary text-inverted": primary },
        { "py-3 px-6": size === "large" },
        { "py-1 px-3": size === "small" }
      );
    }, [primary, size]);
    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
