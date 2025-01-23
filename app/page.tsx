// import Hero from "./components/Hero"
// import Services from "./components/Services"
// import FeaturedServices from "./components/FeaturedServices"
// import AboutUs from "./components/AboutUs"
// import Testimonials from "./components/Testimonials"
// import Partners from "./components/Partners"
// import Contact from "./components/Contact"
// import CallToAction from "./components/CallToAction"

import AboutUs from "@/components/AboutUs";
import Advertising from "@/components/Advertising";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import ContactBanner from "@/components/ContactBanner";
import DisplayScreens from "@/components/DisplayScreens";
import FeaturedServices from "@/components/FeaturedServices";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import SocialMediaPower from "@/components/SocialMediaPower";
import Testimonials from "@/components/Testimonials";
import WebDevelopment from "@/components/WebDevelopment";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedServices />
      <DisplayScreens />
      <CallToAction />
      <SocialMediaPower />
      <Advertising />
<ContactBanner />
      <WebDevelopment />

      <Testimonials />
      <Partners />
      
      <Contact />
    </>
  );
}
