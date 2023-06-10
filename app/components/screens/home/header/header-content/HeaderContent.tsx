import React, { FC } from "react";
import Image from "next/image";
import blop from "@/public/images/header-images/header-blop.png";
import hero from "@/public/images/header-images/hero.png";
import Container from "@/app/ui/container/Container";
import Link from "next/link";

const HeaderContent: FC = () => {
  return (
    <Container className="rounded-[60px] bg-[#F4F6F5] px-[82px] mb-16 flex justify-between items-center">
      <div>
        <h1 className="text-7xl font-black leading-[1.5]">
          <span className="bg-white pr-48">LET’S</span> <br /> EXPLORE <br />{" "}
          <span className="bg-fyellow pr-32">UNIQUE</span> <br />
          CLOTHES.
        </h1>
        <h3 className="text-4xl mb-7 mt-10">
          Live for Influential and Innovative fashion!
        </h3>
        <div className="flex items-center gap-7">
          <Image src={blop} alt="blop" />
          <Link
            href="/catalogue"
            className="text-3xl bg-black text-white py-5 px-10 rounded-[10px]"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <Image src={hero} alt="hero" />
    </Container>
  );
};

export default HeaderContent;
