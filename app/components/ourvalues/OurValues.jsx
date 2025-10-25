import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const OurValues = () => {
  return (
    <section className="lg:pt-[58px] pt-9 lg:pb-32 pb-16 bg-linear-to-r from-[#EEF4F4] to-[#EEEEEE]">
      <Container>
        <div className="lg:pb-[137px] pb-10 text-center">
          <h2 className="lg:text-[36px] text-[24px] text-[#1A0E7D] font-[Nexa] font-extrabold capitalize">
            our values
          </h2>
        </div>
        <div className="">
          <Image
            src="/ourvalues.png"
            alt="Our values"
            height={471}
            width={1180}
            className="lg:w-fit lg:h-fit h-[70%] w-[90%] object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default OurValues;
