
import { NavbarDemo } from "@/components/NavBar";
import Image from "next/image";

import { IntroPage } from "@/components/IntroPage";
import FeatureSection from "@/components/FeatureSection";
import { StickyScrollRevealDemo } from "@/components/strickyScroll";
import { InfiniteMovingCardsDemo } from "@/components/infinite-card";
import { GridBackgroundDemo } from "@/components/grid-background";
import { CardHoverEffectDemo } from "@/components/HoverSection";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center">
      <NavbarDemo />
      <IntroPage />

      <FeatureSection />
      <StickyScrollRevealDemo />
      <GridBackgroundDemo/>
      <CardHoverEffectDemo />

      <WavyBackgroundDemo />

      <Footer />

    </div>
  );
}
