import React, { FC } from "react";
import { headerList } from "./header.list.item.data";
import Image from "next/image";
import Container from "@/app/ui/container/Container";

const HeaderList: FC = () => {
  return (
    <div className="flex px-20 py-[60px] mb-[70px] justify-around items-center w-full bg-fyellow">
      {headerList.map((item, idx) => {
        return <Image key={idx} src={item.image} alt={item.name} />;
      })}
    </div>
  );
};

export default HeaderList;
