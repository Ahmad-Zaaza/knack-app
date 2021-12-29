import { memo, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

interface IHiddenProps {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  xxxl?: boolean;
  xxxxl?: boolean;
}

const Hidden: React.FC<IHiddenProps> = ({
  children,
  lg,
  md,
  sm,
  xl,
  xxl,
  xxxl,
  xxxxl,
}) => {
  const isSm = useMediaQuery({ minWidth: 640 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isXl = useMediaQuery({ minWidth: 1280 });
  const is2xl = useMediaQuery({ minWidth: 1536 });
  const is3xl = useMediaQuery({ minWidth: 1600 });
  const is4xl = useMediaQuery({ minWidth: 1921 });
  const renderContent = useMemo(() => {
    if (sm) return isSm;
    if (md) return isMd;
    if (lg) return isLg;
    if (xl) return isXl;
    if (xxl) return is2xl;
    if (xxxl) return is3xl;
    if (xxxxl) return is4xl;
  }, [
    is2xl,
    is3xl,
    is4xl,
    isLg,
    isMd,
    isSm,
    isXl,
    lg,
    md,
    sm,
    xl,
    xxl,
    xxxl,
    xxxxl,
  ]);

  return <>{renderContent ? children : null}</>;
};

export default memo(Hidden);
