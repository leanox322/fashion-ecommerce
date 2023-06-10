import React, { FC, PropsWithChildren } from "react";
import cn from "clsx";

interface IContainer {
  className?: string;
}

const Container: FC<PropsWithChildren<IContainer>> = ({
  children,
  className,
}) => {
  return <div className={cn("w-[90%] m-auto", className)}>{children}</div>;
};

export default Container;
