import React, { FC } from "react";
import blop from "./blop.png";
import Image from "next/image";
import cn from "clsx";

interface ITitle {
  text: string;
  width: string;
  className?: string;
}

const Title: FC<ITitle> = ({ text, width, className }) => {
  return (
    <div
      style={{ width: width }}
      className={cn("relative h-14 mb-32", className)}
    >
      <h2 className="font-black text-5xl">{text}</h2>
      <Image
        src={blop}
        alt="blop"
        className="absolute bottom-0 right-0 z-[-1]"
      />
    </div>
  );
};

export default Title;
