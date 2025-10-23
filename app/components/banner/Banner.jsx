import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="pt-[84px] pb-[187px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[60%]">
            <div className="py-2 px-4  bg-[#5CD7D1] rounded-full inline-block mb-[65px]">
              <p className="text-[16px] text-black font-inter font-bold">
                Oh, Hello
              </p>
            </div>
            <div className="">
              <h1 className="w-[90%] text-[48px] text-[#1A0D7C] font-[Nexa] font-extrabold  pb-[51px]">
                <span className="text-[#7D97F4]">
                  Purrfect Software Solutions:
                </span>{" "}
                Unleashing Feline Excellence in Software Development
              </h1>
              <p className="w-[50%] text-[16px] text-[#4A5568] font-inter font-normal pb-[34px]">
                High-quality digital resources which make your design workflow
                faster and easier
              </p>
              <div className="">
                <Link
                  href=""
                  className="py-[17px] px-20 border-2 border-[#1A0E7D] rounded-[25px] text-[16px] text-[#1A0E7D] font-inter font-semibold"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <Image
              src="/catprogramming.png"
              alt="Programming-cat"
              height={491}
              width={493}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
