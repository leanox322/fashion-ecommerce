import React, { FC } from "react";
import Container from "@/app/ui/container/Container";
import Image from "next/image";
import facebook from "@/public/images/footer-images/facebook.png";
import instagram from "@/public/images/footer-images/instagram.png";
import twitter from "@/public/images/footer-images/twitter.png";
import linkedin from "@/public/images/footer-images/linkedin.png";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className="bg-black py-[120px]">
      <Container className="flex justify-between">
        <div className="flex flex-col w-[25%]">
          <h2 className="text-white font-black text-4xl">FASHION</h2>
          <h4 className="text-[#8E8E8E] text-2xl py-8">
            Complete your style with awesome clothes from us.
          </h4>
          <div className="flex gap-3.5">
            <Image src={facebook} alt="facebook" className="cursor-pointer" />
            <Image src={instagram} alt="instagram" className="cursor-pointer" />
            <Image src={twitter} alt="twitter" className="cursor-pointer" />
            <Image src={linkedin} alt="linkedin" className="cursor-pointer" />
          </div>
        </div>
        <div className={styles.footer}>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul>
            <li>Quick Link</li>
            <li>Share Location</li>
            <li>Orders Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
          <ul>
            <li>Leagal</li>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
