import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";
import { MdCopyright } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="">
        <Container>
          <div className="pb-[49px]">
            <Image
              src="/footerlogo.png"
              alt="Footer Logo"
              height={96}
              width={127}
              className=" block mx-auto"
            />
          </div>
          <div className="pb-[100px]">
            <ul className="flex items-center justify-center gap-x-5 text-[16px] text-[#222222] font-[Nexa]">
              <li>
                <Link href="/">
                  HOME <span className="pl-5 font-inter">|</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  Services <span className="pl-5 font-inter">|</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  About us <span className="pl-5 font-inter">|</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  Projects <span className="pl-5 font-inter">|</span>
                </Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <div className="h-1 border-b border-b-[#DCDCDC] border-t border-t-[#DCDCDC]"></div>
      <section className=" pt-8 pb-[38px]">
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-[20%] flex items-center gap-x-[5px]">
              <span>
                <MdCopyright className="text-[14px] text-[#6D6D6D]" />
              </span>
              <h6 className="text-[16px] text-[#6D6D6D] font-inter font-normal">
                Purrfect Software Solution
              </h6>
            </div>
            <div className="w-[20%] flex items-center gap-x-10">
              <Link href="">
                <Image src="/fb.png" alt="Facebook" height={24} width={24} />
              </Link>
              <Link href="">
                <Image src="/tw.png" alt="Facebook" height={24} width={24} />
              </Link>
              <Link href="">
                <Image src="/in.png" alt="Facebook" height={24} width={24} />
              </Link>
            </div>
            <div className="w-[20%] flex items-center gap-x-1">
              <span>
                <IoIosMail className="text-[#656565] text-[18px]" />
              </span>{" "}
              <p className="text-[16px] text-[#626262] font-inter font-medium">
                Purrfect Software Solution
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
