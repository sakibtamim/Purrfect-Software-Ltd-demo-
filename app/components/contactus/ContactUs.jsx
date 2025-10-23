import React from "react";
import Container from "../shared/Container";
import { FaAngleRight } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section
      className="mt-[200px] pt-[151px] pb-[341px] "
      style={{
        background: "url('/contactbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "",
      }}
    >
      <Container>
        <div className="pb-10">
          <h2 className="text-[48px] text-[#222222] font-[NexaRe] font-normal uppercase pb-2">
            Contact us
          </h2>
          <p className="w-[30%] text-[16px] text-[#474747] font-inter font-normal ">
            If you have any questions about something you would like to discuss
            with us, let us know!
          </p>
        </div>
        <div className="w-[502px]">
          <div className="relative pb-12">
            <label
              className="absolute -top-4 text-[16px] text-[#474747] font-[Avenir] "
              htmlFor=""
            >
              EMAIL
            </label>
            <input
              type="email"
              placeholder=" "
              className="text-[16px] text-[#474747] font-[Avenir] w-full  border-b border-b-[#222222] outline-none"
            />
          </div>
          <div className="relative pb-[92px]">
            <label
              className="absolute -top-4 text-[16px] text-[#474747] font-[Avenir] "
              htmlFor=""
            >
              MESSAGE
            </label>
            <textarea className="text-[16px] h-[30px] text-[#474747] font-[Avenir] w-full  border-b border-b-[#222222] outline-none"></textarea>
          </div>
          <button className="flex items-center gap-x-2.5 text-[14px] text-black font-[Nexa] uppercase py-[18px] px-7 border-2 border-black rounded-full cursor-pointer">
            contact now <FaAngleRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
