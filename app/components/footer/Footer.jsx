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
          <div className="lg:pb-[49px] pb-[34px]">
            <Image
              src="/footerlogo.png"
              alt="Footer Logo"
              height={96}
              width={127}
              className=" block mx-auto lg:h-fit lg:w-fit h-[60px] w-[100px]"
            />
          </div>
          <div className="lg:pb-[100px] pb-[50px]">
            <ul className="flex items-center justify-center lg:gap-x-5 gap-x-2  lg:text-[16px] text-[14px] text-[#222222] font-[Nexa]">
              <li>
                <Link href="/">
                  HOME <span className="lg:pl-5 pl-2 font-inter ">|</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  Services <span className="lg:pl-5 pl-2 font-inter ">|</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  About us <span className="lg:pl-5 pl-2 font-inter ">|</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  Projects <span className="lg:pl-5 pl-2 font-inter ">|</span>
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
      <section className=" lg:pt-8 pt-4  lg:pb-[38px] pb-6">
        <Container>
          <div className="flex flex-wrap items-center justify-between lg:gap-y-0  gap-y-5">
            <div className="lg:w-[20%] w-[50%] flex items-center lg:justify-start justify-center gap-x-[5px]">
              <span>
                <MdCopyright className="lg:text-[14px] text-[12px] text-[#6D6D6D]" />
              </span>
              <h6 className="lg:text-[16px] text-[14px] text-[#6D6D6D] font-inter font-normal">
                Purrfect Software Solution
              </h6>
            </div>
            <div className="lg:w-[20%] w-[50%] flex items-center lg:justify-start justify-center  gap-x-10">
              <Link href="">
                <Image
                  src="/fb.png"
                  alt="Facebook"
                  height={24}
                  width={24}
                  className="lg:w-fit lg:-h-fit h-5 w-5"
                />
              </Link>
              <Link href="">
                <Image
                  src="/tw.png"
                  alt="Facebook"
                  height={24}
                  width={24}
                  className="lg:w-fit lg:-h-fit h-5 w-5"
                />
              </Link>
              <Link href="">
                <Image
                  src="/in.png"
                  alt="Facebook"
                  height={24}
                  width={24}
                  className="lg:w-fit lg:-h-fit h-5 w-5"
                />
              </Link>
            </div>
            <div className="lg:w-[20%] w-full flex items-center lg:justify-start justify-center  gap-x-1">
              <span>
                <IoIosMail className="text-[#656565] lg:text-[18px] text-[16px]" />
              </span>{" "}
              <p className="lg:text-[16px] text-[14px]  text-[#626262] font-inter font-medium">
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
