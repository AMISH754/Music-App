import Image from "next/image";
import HeroSection from "@/components/HeroSection";

import { Spotlight } from '@/components/ui/Spotlight'
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
     <main className="min-h-screen text-2xl text-white bg-black/[0.96]  antialiased bg-grid-white/[0.02] pt-36">
       <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <HeroSection/> 
      <FeaturedCourses/>
      <WhyChooseUs/>  
      <TestimonialCards/>  
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
      </main>
  );
}
