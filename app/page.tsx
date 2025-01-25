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
import SocialMediaCards from '@/components/SocialMediaCards';
import HospitalsBanner from "@/components/HospitalsBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Advertising />
      <ContactBanner />
      <SocialMediaCards />
      <HospitalsBanner />
      <FeaturedServices />
      
      <DisplayScreens />

      <CallToAction />

  
      <SocialMediaPower />
      <ContactBanner />
      <WebDevelopment />

      <Testimonials />
      <Partners />

      <Contact />
    </>
  );
}
