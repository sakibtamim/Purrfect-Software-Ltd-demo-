import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const OurValues = () => {
  return (
    <section className="pt-[58px] pb-32 bg-linear-to-r from-[#EEF4F4] to-[#EEEEEE]">
      <Container>
        <div className="pb-[137px] text-center">
          <h2 className="text-[36px] text-[#1A0E7D] font-[Nexa] font-extrabold capitalize">
            our values
          </h2>
        </div>
        <div className="">
          <Image
            src="/ourvalues.png"
            alt="Our values"
            height={471}
            width={1180}
          />
        </div>
      </Container>
    </section>
  );
};

export default OurValues;
