import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const WeDo = () => {
  return (
    <section className="lg:pb-[72px] pb-10">
      <Container>
        <div className="text-center lg:pb-[68px] pb-9">
          <h2 className="lg:text-[36px] text-[24px] text-[#1A0E7D] font-[Nexa] font-extrabold">
            We develop and deliver
          </h2>
        </div>
        <div className=" flex  flex-wrap justify-between lg:gap-y-12 gap-y-5">
          <div className="lg:w-[30%] w-[48%] bg-[#FFFBE4] rounded-[15px] lg:py-[65px] py-9  text-center">
            <Image
              src="/web.png"
              alt="Web Development"
              height={75}
              width={75}
              className="lg:pb-[47px] pb-6 block mx-auto lg:w-fit lg:h-fit h-[60px] w-[60px] object-contain"
            />
            <h5 className="lg:text-[22px] text-[18px] text-[#474747] font-inter font-black">
              Web Development
            </h5>
          </div>
          <div className="lg:w-[30%] w-[48%] bg-[#ECFCFC] rounded-[15px] lg:py-[65px] py-9  text-center">
            <Image
              src="/ios.png"
              alt="IOS Development"
              height={76}
              width={64}
              className="lg:pb-[47px] pb-6 block mx-auto lg:w-fit lg:h-fit h-[60px] w-[50px] object-contain"
            />
            <h5 className="lg:text-[22px] text-[18px] text-[#474747] font-inter font-black">
              IOS Development
            </h5>
          </div>
          <div className="lg:w-[30%] w-[48%] bg-[#FCF4F6] rounded-[15px] lg:py-[65px] py-9  text-center">
            <Image
              src="/android.png"
              alt="Android Development"
              height={88}
              width={71}
              className="lg:pb-[47px] pb-6 block mx-auto lg:w-fit lg:h-fit h-[70px] w-[60px] object-contain"
            />
            <h5 className="lg:text-[22px] text-[18px] text-[#474747] font-inter font-black">
              Android Development
            </h5>
          </div>
          <div className="lg:w-[30%] w-[48%] bg-[#E3F2FE] rounded-[15px] lg:py-[65px] py-9  text-center">
            <Image
              src="/uiux.png"
              alt="UI/UX"
              height={90}
              width={90}
              className="lg:pb-[47px] pb-6 block mx-auto lg:w-fit lg:h-fit h-20 w-20 object-contain"
            />
            <h5 className="lg:text-[22px] text-[18px] text-[#474747] font-inter font-black">
              UI/UX
            </h5>
          </div>
          <div className="lg:w-[30%] w-[48%] bg-[#FBF1E9] rounded-[15px] lg:py-[65px] py-9  text-center">
            <Image
              src="/project.png"
              alt="Project Management"
              height={82}
              width={82}
              className=" lg:pb-[47px] pb-6 block mx-auto lg:w-fit lg:h-fit h-[70px] w-[70px] object-contain"
            />
            <h5 className="lg:text-[22px] text-[18px] text-[#474747] font-inter font-black">
              Project Management
            </h5>
          </div>
          <div className="lg:w-[30%] w-[48%] bg-[#F6F0FF] rounded-[15px] lg:py-[65px] py-9  text-center">
            <Image
              src="/quality.png"
              alt="Quality Assurance"
              height={94}
              width={94}
              className="lg:pb-[47px] pb-6 block mx-auto lg:w-fit lg:h-fit h-20 w-20 object-contain"
            />
            <h5 className="lg:text-[22px] text-[18px] text-[#474747] font-inter font-black">
              Quality Assurance
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeDo;
