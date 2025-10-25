import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="lg:pb-[97px] pb-10">
      <Image
        src="/testimonial.png"
        alt="Testimonial"
        height={613}
        width={1920}
        className=" w-full "
      />
    </section>
  );
};

export default Testimonial;
