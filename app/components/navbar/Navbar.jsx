import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="py-[30px]">
      <Container>
        <div className="flex items-center ">
          <div className="w-[30%]">
            {/* <img src="/logo.png" alt="" /> */}
            <Image src="/logo.png" alt="logo" width={48} height={36} />
          </div>
          <div className="w-[70%] ">
            <ul className="flex items-center justify-end gap-x-[30px] text-[14px] text-[#979797] font-inter font-semibold">
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <Link href="/">About us</Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="py-[11px] px-[45px]  bg-[#1A0E7D] text-white rounded-[21px] font-[Nexa] font-extrabold"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
