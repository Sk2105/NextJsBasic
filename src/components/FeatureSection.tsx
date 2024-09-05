"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

function BackgroundGradientDemo() {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                    February 17, 2024. Your best opportunity to get these right now is by
                    entering raffles and waiting for the official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                    </span>
                </button>
            </BackgroundGradient>
        </div>
    );
}

export default function FeatureSection() {
    return (
        <div className="flex flex-col justify-center items-center p-4 bg-gray-900">
            <h1 className="text-3xl  text-teal-400 ">Feature Section</h1>
            <p className="text-lg font-semibold text-white">
                Background Gradient Demo Section
            </p>
            <div className="flex mt-4 flex-row justify-center gap-2 items-center flex-wrap">
                <BackgroundGradientDemo />
                <BackgroundGradientDemo />
                <BackgroundGradientDemo />
                <BackgroundGradientDemo />
                <BackgroundGradientDemo />
                <BackgroundGradientDemo />
                <BackgroundGradientDemo />
            </div>
        </div>

    );
}
