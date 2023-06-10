import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "./menu/NavbarMenu";
import logo from "@/public/images/logo.png";
import Container from "@/app/ui/container/Container";
import Cart from "./cart/Cart";

const Navbar: FC = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between py-11">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-16 font-medium">
          <NavbarMenu />
          <div className="flex items-center gap-7">
            <Cart />
            <button className="bg-black text-white py-[13px] px-[22px] rounded-lg text-2xl">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
