import Image from "next/image";
import Hero from "../components/Hero";
import LogoGrid from "../components/LogoGrid";
import Features from "../components/Features";
import CTA from "../components/CTA";
import ToolKit from "../components/ToolKit";
import Testimonials from "../components/Testimonials";
import FooterCTA from "../components/FooterCTA";
import GradientWrapper from "../components/GradientWrapper";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <Features />
      </GradientWrapper>
      <ToolKit />
        <CTA />
      <Pricing />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
