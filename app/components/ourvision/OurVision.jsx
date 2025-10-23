import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const OurVision = () => {
  return (
    <section className="mt-[130px]  bg-[#FCF9FF]">
      <Container>
        <div className="pl-[109px] py-16 relative">
          <div className="w-[40%] ">
            <h2 className="text-[34px] text-[#1A0D7C] font-[Nexa] font-bold pb-8">
              Our vision
            </h2>
            <p className=" text-[16px] text-[#0E101A] font-inter font-normal">
              Our vision is to be a globally recognized leader in software
              development, driving innovation and creating transformative
              solutions that shape the future of technology. We strive to
              empower businesses and individuals by delivering exceptional
              software products and services that enhance efficiency,
              connectivity, and user experiences. Through our relentless pursuit
              of excellence, ethical responsibility, and collaborative
              partnerships, we aim to positively impact industries, communities,
              and the world at large. By consistently pushing the boundaries of
              what's possible, we aspire to inspire and redefine the
              possibilities of software development in the new world.
            </p>
          </div>
          <div className="absolute top-16 left-[685px]">
            <Image
              src="/ourvision.png"
              alt="Our vision"
              width={414}
              height={515}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurVision;
