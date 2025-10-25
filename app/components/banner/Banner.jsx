import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="lg:pt-[84px] pt-10 lg:pb-[187px] pb-18">
      <Container>
        <div className="lg:flex  justify-between">
          <div className="lg:w-[60%] w-full">
            <div className="py-2 lg:px-4 px-3  bg-[#5CD7D1] rounded-full inline-block lg:mb-[65px] mb-8">
              <p className="lg:text-[16px] text-[12px] text-black font-inter font-bold">
                Oh, Hello
              </p>
            </div>
            <div className="">
              <h1 className="lg:w-[90%]  lg:text-[48px] text-[30px] text-[#1A0D7C] font-[Nexa] font-extrabold  lg:pb-[51px] pb-6">
                <span className="text-[#7D97F4]">
                  Purrfect Software Solutions:
                </span>{" "}
                Unleashing Feline Excellence in Software Development
              </h1>
              <p className="lg:w-[50%] w-[80%] lg:text-[16px] text-[14px] text-[#4A5568] font-inter font-normal pb-[34px]">
                High-quality digital resources which make your design workflow
                faster and easier
              </p>
              <div className="lg:pb-0 pb-10">
                <Link
                  href=""
                  className="lg:py-[17px] py-3.5 lg:px-20 px-10 border-2 border-[#1A0E7D] rounded-[25px] text-[16px] text-[#1A0E7D] font-inter font-semibold "
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] w-full">
            <Image
              src="/catprogramming.png"
              alt="Programming-cat"
              height={491}
              width={493}
              className="lg:w-full lg:h-full h-[250px] w-[250px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
