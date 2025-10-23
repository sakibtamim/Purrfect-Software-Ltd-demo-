import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const WeBelieve = () => {
  return (
    <section className="pb-[133px]">
      <Container>
        <div className=" flex items-center gap-x-[152px]">
          <div className="w-[40%]">
            <Image
              src="/supercat.png"
              alt="Super Cat"
              height={350}
              width={572}
            />
          </div>
          <div className="w-[35%]">
            <h2 className="text-[36px] text-[#190D7D] font-[Nexa] pb-2">
              We believe in Excellence
            </h2>
            <p className="text-[16px] text-[#4A5568] font-normal font-inter pb-[50px]">
              High-quality digital resources which make resources which make
              your design workflow faster and easier
            </p>
            <div className="inline-block text-[14px] text-black font-bold font-inter py-[18px] px-[95px] border-2 border-[#190D7D] bg-[#82CAC7] rounded-full">
              <p>Contact US</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeBelieve;
