import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/images/main-images/girl.png";

const PaydaySale: FC = () => {
  return (
    <div className="bg-[#ffeb63] flex justify-around mb-48">
      <Image src={img} alt="girl" />
      <div className="flex flex-col py-24 w-[35%]">
        <h2 className="text-7xl font-black leading-[1.5]">
          <span className="bg-white pr-6">PAYDAY</span> <br /> SALE NOW
        </h2>
        <h3 className="color-[#231300] font-medium text-4xl mt-8 mb-10 leading-[1.5]">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </h3>
        <span className="font-bold text-4xl leading-[1.5]">
          1 June - 10 June 2021
        </span>
        <span className="text-4xl mb-12 leading-[1.5]">
          *Terms & Conditions apply
        </span>
        <Link href="/catalogue">
          <button className="font-semibold text-3xl text-white bg-black w-[265px] py-7 rounded-[8px]">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaydaySale;
