import React from "react";
import { cn } from "@/utils/utils";
import { Spotlight } from "./ui/SoftLight";
import { Button, MovingBorder } from "./ui/moving-border";
import Link from "next/link";

export function IntroPage() {
  return (
    <div className="h-[40rem] top-0 relative  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl flex flex-col justify-center items-center mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          The Next Js Framework
          <br />
          For Web Development
        </h1>
        <p className="mt-4 mb-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">

          The Next.js framework for web development. With its modular architecture, it offers a wide range of features and libraries.
          its modular architecture, it offers a wide range of features and libraries.
        </p>
        <Link href="/web-dev"><Button className="bg-black hover:bg-sky-700/10">Get Started</Button></Link>

      </div>
    </div>
  );
}
