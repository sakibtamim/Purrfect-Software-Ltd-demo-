import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="pb-[97px]">
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
