import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const WeBelieve = () => {
  return (
    <section className="lg:pb-[133px] pb-[70px]">
      <Container>
        <div className=" lg:flex items-center gap-x-[152px]">
          <div className="lg:w-[40%] w-full lg:pb-0 pb-10">
            <Image
              src="/supercat.png"
              alt="Super Cat"
              height={350}
              width={572}
              className="lg:w-fit lg:h-fit w-[80%] h-[60%] object-contain"
            />
          </div>
          <div className="lg:w-[35%] w-full">
            <h2 className="lg:text-[36px] text-[24px] text-[#190D7D] font-[Nexa] pb-2">
              We believe in Excellence
            </h2>
            <p className="lg:text-[16px] text-[14px] text-[#4A5568] font-normal font-inter pb-[50px]">
              High-quality digital resources which make resources which make
              your design workflow faster and easier
            </p>
            <div className="inline-block lg:text-[14px] text-[12px] text-black font-bold font-inter lg:py-[18px] py-3 lg:px-[95px] px-10 border-2 border-[#190D7D] bg-[#82CAC7] rounded-full">
              <p>Contact US</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeBelieve;
