import { Hero } from "@/components/home/Hero";
import { FourStories } from "@/components/home/FourStories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FourStories />
      <HowItWorks />
      <WhatWeDo />
      <HomeCTA />
    </>
  );
}
