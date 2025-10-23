import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const WeDo = () => {
  return (
    <section className="pb-[72px]">
      <Container>
        <div className="text-center pb-[68px]">
          <h2 className="text-[36px] text-[#1A0E7D] font-[Nexa] font-extrabold">
            We develop and deliver
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between gap-y-12">
          <div className="w-[30%] bg-[#FFFBE4] rounded-[15px] py-[65px]  text-center">
            <Image
              src="/web.png"
              alt="Web Development"
              height={75}
              width={75}
              className="pb-[47px] block mx-auto"
            />
            <h5 className="text-[22px] text-[#474747] font-inter font-black">
              Web Development
            </h5>
          </div>
          <div className="w-[30%] bg-[#ECFCFC] rounded-[15px] py-[65px]  text-center">
            <Image
              src="/ios.png"
              alt="IOS Development"
              height={71}
              width={59}
              className="pb-[47px] block mx-auto"
            />
            <h5 className="text-[22px] text-[#474747] font-inter font-black">
              IOS Development
            </h5>
          </div>
          <div className="w-[30%] bg-[#FCF4F6] rounded-[15px] py-[65px]  text-center">
            <Image
              src="/android.png"
              alt="Android Development"
              height={88}
              width={71}
              className="pb-[47px] block mx-auto"
            />
            <h5 className="text-[22px] text-[#474747] font-inter font-black">
              Android Development
            </h5>
          </div>
          <div className="w-[30%] bg-[#E3F2FE] rounded-[15px] py-[65px]  text-center">
            <Image
              src="/uiux.png"
              alt="UI/UX"
              height={90}
              width={90}
              className="pb-[47px] block mx-auto"
            />
            <h5 className="text-[22px] text-[#474747] font-inter font-black">
              UI/UX
            </h5>
          </div>
          <div className="w-[30%] bg-[#FBF1E9] rounded-[15px] py-[65px]  text-center">
            <Image
              src="/project.png"
              alt="Project Management"
              height={82}
              width={82}
              className="pb-[47px] block mx-auto"
            />
            <h5 className="text-[22px] text-[#474747] font-inter font-black">
              Project Management
            </h5>
          </div>
          <div className="w-[30%] bg-[#F6F0FF] rounded-[15px] py-[65px]  text-center">
            <Image
              src="/quality.png"
              alt="Quality Assurance"
              height={94}
              width={94}
              className="pb-[47px] block mx-auto"
            />
            <h5 className="text-[22px] text-[#474747] font-inter font-black">
              Quality Assurance
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeDo;
