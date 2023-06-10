import React, { FC } from "react";
import Container from "@/app/ui/container/Container";
import appstore from "@/public/images/main-images/appstore.png";
import googleplay from "@/public/images/main-images/googleplay.png";
import phone from "@/public/images/main-images/phone.png";
import Image from "next/image";

const DownloadApp: FC = () => {
  return (
    <Container className="flex items-center justify-around mb-40">
      <div className="w-[35%]">
        <h3 className="font-black text-5xl leading-[1.5]">
          DOWNLOAD APP & GET THE VOUCHER!
        </h3>
        <h4 className="text-[#7C7C7C] font-medium text-2xl mt-10 mb-16">
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </h4>
        <div className="flex gap-5">
          <Image src={appstore} alt="appstore" className="cursor-pointer" />
          <Image src={googleplay} alt="appstore" className="cursor-pointer" />
        </div>
      </div>
      <Image src={phone} alt="mobile" />
    </Container>
  );
};

export default DownloadApp;
