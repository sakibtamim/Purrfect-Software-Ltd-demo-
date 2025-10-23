import Banner from "./components/banner/Banner";
import ContactUs from "./components/contactus/ContactUs";
import OurValues from "./components/ourvalues/OurValues";
import OurVision from "./components/ourvision/OurVision";
import WeDo from "./components/wedo/WeDo";

export default function Home() {
  return (
    <>
      <Banner />
      <WeDo />
      <OurValues />
      <OurVision />
      <ContactUs />
    </>
  );
}
