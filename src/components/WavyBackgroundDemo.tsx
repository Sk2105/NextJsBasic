"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltipPreview } from "./MentorsDemo";

export function WavyBackgroundDemo() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                This is a hero section, it's a wavy background
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                This is a hero section, it's a wavy background, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minus blanditiis harum dolorem dicta. Exercitationem commodi quos ea blanditiis beatae ducimus et maiores, at accusantium, suscipit voluptates ipsam. Consequuntur, modi?
            </p>

            <AnimatedTooltipPreview />
        </WavyBackground>
    );
}
