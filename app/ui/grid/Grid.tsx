import { FC } from "react";
import { PropsWithChildren } from "react";
import cn from "clsx";

interface IGrid {
  className?: string;
}

const Grid: FC<PropsWithChildren<IGrid>> = ({ children, className }) => {
  return (
    <div className={cn("grid grid-cols-3 gap-10 mb-10", className)}>
      {children}
    </div>
  );
};

export default Grid;
