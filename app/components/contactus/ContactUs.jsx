import React from "react";
import Container from "../shared/Container";
import { FaAngleRight } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section
      className=" lg:mt-[200px] mt-20 lg:pt-[200px] pt-[90px] lg:pb-[341px] pb-40 bg-cover!  bg-no-repeat!"
      style={{
        background: "url('/contactbg.png')",
      }}
    >
      <Container>
        <div className="pb-10">
          <h2 className="lg:text-[48px] text-[36px] text-[#222222] font-[NexaRe] font-normal uppercase pb-2">
            Contact us
          </h2>
          <p className="lg:w-[30%] lg:text-[16px] text-[14px] text-[#474747] font-inter font-normal ">
            If you have any questions about something you would like to discuss
            with us, let us know!
          </p>
        </div>
        <div className="lg:w-[502px] w-[80%]">
          <div className="relative pb-12">
            <label
              className="absolute -top-4 lg:text-[16px] text-[14px] text-[#474747] font-[Avenir] "
              htmlFor=""
            >
              EMAIL
            </label>
            <input
              type="email"
              placeholder=" "
              className="lg:text-[16px] text-[14px] text-[#474747] font-[Avenir] w-full  border-b border-b-[#222222] outline-none"
            />
          </div>
          <div className="relative lg:pb-[92px] pb-10">
            <label
              className="absolute -top-4 lg:text-[16px] text-[14px] text-[#474747] font-[Avenir] "
              htmlFor=""
            >
              MESSAGE
            </label>
            <textarea className="lg:text-[16px] text-[14px] h-[30px] text-[#474747] font-[Avenir] w-full  border-b border-b-[#222222] outline-none"></textarea>
          </div>
          <button className="flex items-center lg:gap-x-2.5 gap-x-1.5 lg:text-[14px] text-[10px] text-black font-[Nexa] uppercase lg:py-[18px] py-3 lg:px-7 px-4 lg:border-2 border border-black rounded-full cursor-pointer">
            contact now <FaAngleRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
