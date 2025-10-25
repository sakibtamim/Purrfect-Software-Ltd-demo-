"use client";
import React, { useState } from "react";
import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleLinkClick = () => {
    setShow(false);
  };

  return (
    <nav className="lg:py-[30px] py-4 sticky top-0  bg-white shadow-md z-50 w-full">
      <Container>
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="w-[30%]">
            <Image src="/logo.png" alt="logo" width={48} height={36} />
          </div>

          {/* menu toggler */}
          <div className="lg:hidden block " onClick={() => setShow(!show)}>
            {show ? (
              <IoClose className="text-3xl text-[#1A0E7D] cursor-pointer" />
            ) : (
              <IoMenu className="text-3xl text-[#1A0E7D] cursor-pointer" />
            )}
          </div>

          {/* Menu */}
          <div className="lg:w-[70%] w-full lg:static absolute left-0 top-[46px]">
            <ul
              className={`w-full lg:flex items-center justify-end lg:gap-x-[30px] lg:text-[14px] text-[18px] text-[#979797] font-inter font-semibold  duration-300 ease-in-out ${
                show ? "bg-gray-200 text-center " : "hidden"
              }`}
            >
              <Link
                href="/"
                className="block lg:border-none border-b-2 border-b-[#979797] lg:py-0 py-10"
                onClick={handleLinkClick}
              >
                <li>Services</li>
              </Link>
              <Link
                href="/"
                className="block lg:border-none border-b-2 border-b-[#979797] lg:py-0 py-10"
                onClick={handleLinkClick}
              >
                <li>Projects</li>
              </Link>
              <Link
                href="/"
                className="block lg:border-none border-b-2 border-b-[#979797] lg:py-0 py-10"
                onClick={handleLinkClick}
              >
                <li>About us</li>
              </Link>
              <Link
                href="/"
                className="block lg:border-none border-b-2 border-b-[#979797] lg:py-0 py-10"
                onClick={handleLinkClick}
              >
                <li>Contact us</li>
              </Link>
              <Link
                href="/"
                className="block lg:py-0 py-10"
                onClick={handleLinkClick}
              >
                <li className="py-[11px] px-[45px]  bg-[#1A0E7D] text-[16px] text-white rounded-[21px] font-[Nexa] inline-block">
                  Get in touch
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
